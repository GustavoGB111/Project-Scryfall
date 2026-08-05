import { inject, injectable } from "tsyringe";
import {
  UserCreateInputDto,
  UserCreateOutputDto,
} from "../dto/controller&service.dto/user-create.dto";
import { validateErros } from "../../../../common/validate.erros";
import IAuthRepository from "../repositories/interfaces/auth.repository.interface";
import { hash, compare } from "bcrypt";
import {
  LoginInputDto,
  LoginOutputDto,
} from "../dto/controller&service.dto/login.dto";
import jwt from "jsonwebtoken";
import {
  forgotPasswordInputDto,
  forgotPasswordOutputDto,
} from "../dto/controller&service.dto/forgot-password.dto";
import {
  SendPinInputDto,
  SendPinOutputDto,
} from "../dto/controller&service.dto/send-pin.dto";
import { ResetPassworInputDto } from "../dto/controller&service.dto/reset-password.dto";
import { BrevoClient } from "@getbrevo/brevo";
import { Encrypt } from "../../../../common/encryption";

const secret = process.env.JWT_SECRET;
const secretRefresh = process.env.JWT_SECRET_REFRESH;

const senderEmail = process.env.BREVO_SENDER_EMAIL;
const senderName = process.env.BREVO_SENDER_NAME;

@injectable()
export class AuthService {
  constructor(
    @inject("AuthRepository")
    private readonly AuthRepository: IAuthRepository,
    @inject("ApiBrevo")
    private readonly ApiBrevo: BrevoClient,
    @inject("Encrypt")
    private readonly Encrypt: Encrypt,
  ) {}

  async registerUser(input: UserCreateInputDto): Promise<UserCreateOutputDto> {
    try {
      await validateErros(UserCreateInputDto, input);

      const userExisting = await this.AuthRepository.getOneUser({
        userEmail: input.userEmail,
      });

      if (userExisting) {
        throw new Error("Email ja cadastrado");
      }

      const hashedPassword = await hash(input.userPassword, 10);

      const { encrypted, iv, authTag } =
        await this.Encrypt.encrypt(hashedPassword);

      const userEntity = await this.AuthRepository.createUser({
        userEmail: input.userEmail,
        userName: input.userName,
        userPassword: encrypted,
        userPasswordIv: iv,
        userPasswordAuthTag: authTag,
      });

      if (!userEntity) {
        throw new Error("Erro, Usuário não criado");
      }

      return userEntity;
    } catch (error) {
      throw error;
    }
  }

  async login(input: LoginInputDto): Promise<LoginOutputDto> {
    try {
      await validateErros(LoginInputDto, input);
      const userExisting = await this.AuthRepository.getOneUser({
        userEmail: input.userEmail,
      });

      if (!userExisting) {
        throw new Error("Email ou Senha inválidos");
      }

      const decryptedPassword = await this.Encrypt.decrypt({
        iv: userExisting.userPasswordIv,
        encrypted: userExisting.userPassword,
        authTag: userExisting.userPasswordAuthTag,
      });

      const passwordCompare = await compare(
        input.userPassword,
        decryptedPassword,
      );

      if (!passwordCompare) {
        throw Error("Email ou Senha inválidos");
      }

      /**
       * primeira {} -> serve pra guardar dentro do token o id e o email (payload)
       * depois guarda o token (signature)
       * por ultimo diz em quanto tempo ele vai expirar
       */
      const token = jwt.sign(
        {
          userId: userExisting.userId,
          userEmail: userExisting.userEmail,
          userRole: userExisting.userRole,
        },
        secret!,
        {
          expiresIn: "3h",
        },
      );

      return {
        token,
        user: {
          userId: userExisting.userId,
          userName: userExisting.userName,
          userEmail: userExisting.userEmail,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async requestPin(
    input: forgotPasswordInputDto,
  ): Promise<forgotPasswordOutputDto> {
    try {
      await validateErros(forgotPasswordInputDto, input);

      const emailExisting = await this.AuthRepository.getOneUser({
        userEmail: input.userEmail,
      });

      if (!emailExisting) {
        throw new Error("Erro");
      }

      const infosPin = await this.AuthRepository.getOnePin({
        userId: emailExisting.userId,
      });

      const now = new Date();
      const nowPlus5Minuts = new Date(now.getTime() + 5 * 60 * 1000);
      const nowPlus10Minuts = new Date(now.getTime() + 10 * 60 * 1000);

      if (infosPin) {
        if (infosPin.pinsRequested > 3 && infosPin.pinsRequestedResetAt > now) {
          throw new Error("erro, multiplas solicitações");
        } else if (
          infosPin.pinsRequested <= 3 &&
          infosPin.pinsRequestedResetAt > now
        ) {
          const userPinUpdated = await this.AuthRepository.updatePin({
            userId: emailExisting.userId,
            pinsRequested: infosPin.pinsRequested + 1,
            pinsRequestedResetAt: infosPin.pinsRequestedResetAt,
            pinsExpiredAt: nowPlus10Minuts,
          });

          if (!userPinUpdated || userPinUpdated.affected !== 1) {
            throw new Error("Erro ao atualizar dados");
          }
        } else {
          const userPinUpdated = await this.AuthRepository.updatePin({
            userId: emailExisting.userId,
            pinsRequested: 1,
            pinsRequestedResetAt: nowPlus5Minuts,
            pinsExpiredAt: nowPlus10Minuts,
          });

          if (!userPinUpdated || userPinUpdated.affected !== 1) {
            throw new Error("Erro ao atualizar dados");
          }
        }
      }

      // Enviar pin ao user
      const pin = Math.floor(100000 + Math.random() * 900000).toString();

      await this.ApiBrevo.transactionalEmails.sendTransacEmail({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: input.userEmail,
          },
        ],
        subject: "Recuperação de senha",
        htmlContent: `
          <h2>Recuperação de senha</h2>
            <p>Seu código é:</p>
            <h1>${pin}</h1>
            <p>Esse código expira em 10 minutos.</p>
          `,
      });

      // criar ou alterar pin

      const hashedPin = await hash(pin, 10);

      const { iv, encrypted, authTag } = await this.Encrypt.encrypt(hashedPin);

      if (infosPin) {
        const userPinEntity = await this.AuthRepository.updatePin({
          userId: emailExisting.userId,
          userPin: encrypted,
          userPinIv: iv,
          userPinAuthTag: authTag,
          pinUsed: false,
          passwordReseted: false,
        });
        if (!userPinEntity || userPinEntity.affected !== 1) {
          throw new Error("Erro ao atualizar dados");
        }
      } else if (!infosPin) {
        const userPinEntity = await this.AuthRepository.createPin({
          userId: emailExisting.userId,
          userPin: encrypted,
          userPinIv: iv,
          userPinAuthTag: authTag,
          pinsRequested: 1,
          pinsRequestedResetAt: nowPlus5Minuts,
          pinsExpiredAt: nowPlus10Minuts,
          pinUsed: false,
          passwordReseted: false,
        });
        if (!userPinEntity) {
          throw new Error("Erro ao atualizar dados");
        }
      }

      return {
        userEmail: input.userEmail,
      };
    } catch (error) {
      throw error;
    }
  }

  async sendPin(input: SendPinInputDto): Promise<SendPinOutputDto> {
    try {
      await validateErros(SendPinInputDto, input);

      const emailExisting = await this.AuthRepository.getOneUser({
        userEmail: input.userEmail,
      });
      if (!emailExisting) {
        throw new Error("Erro");
      }

      const infosPin = await this.AuthRepository.getOnePin({
        userId: emailExisting.userId,
      });

      if (!infosPin) {
        throw new Error("Erro");
      }

      const now = new Date();

      if (infosPin.pinsExpiredAt < now) {
        throw new Error("Erro");
      }

      const hashedPin = await this.Encrypt.decrypt({
        iv: infosPin.userPinIv,
        encrypted: infosPin.userPin,
        authTag: infosPin.userPinAuthTag,
      });

      const pinCompare = await compare(input.userPin, hashedPin);

      if (!pinCompare) {
        throw new Error("Erro");
      }

      const token = jwt.sign({ userId: emailExisting.userId }, secretRefresh!, {
        expiresIn: "10m",
      });

      if (infosPin.pinUsed !== false) {
        throw new Error("Erro, pin ja utilizado");
      }

      const pinUsed = await this.AuthRepository.updatePin({
        userId: emailExisting.userId,
        pinUsed: true,
      });

      if (!pinUsed || pinUsed.affected !== 1) {
        throw new Error("Pin não pôde ser utilizado");
      }

      return {
        token,
      };
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(input: ResetPassworInputDto): Promise<void> {
    try {
      await validateErros(ResetPassworInputDto, input);

      if (input.userPassword !== input.userConfirmPassword) {
        throw new Error("Erro, as senhas devem ser iguais");
      }

      const infosPin = await this.AuthRepository.getOnePin({
        userId: input.userId,
      });

      if (!infosPin) {
        throw new Error("Erro, usuario não encontrado");
      }

      if (infosPin.passwordReseted != false) {
        throw new Error("Erro, senha já alterada");
      }

      const hashedPassword = await hash(input.userPassword, 10);

      const { iv, authTag, encrypted } =
        await this.Encrypt.encrypt(hashedPassword);

      const passwordReseted = await this.AuthRepository.updatePin({
        userId: input.userId,
        passwordReseted: true,
      });

      if (!passwordReseted || passwordReseted.affected !== 1) {
        throw new Error("Erro, senha já alterada");
      }

      const user = await this.AuthRepository.updateUserPassword({
        userId: input.userId,
        userPassword: encrypted,
        userPasswordIv: iv,
        userPasswordAuthTag: authTag,
      });

      if (!user || user.affected !== 1) {
        throw new Error("Erro, senha não pôde ser alterada");
      }
    } catch (error) {
      throw error;
    }
  }
}
