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
  ResetPassworInputDto,
  SendPinInputDto,
  SendPinOutputDto,
} from "../dto/controller&service.dto/forgot-password.dto";
import { BrevoClient } from "@getbrevo/brevo";

const secret = process.env.JWT_SECRET;
const secretRefresh = process.env.JWT_SECRET_REFRESH;

const senderEmail = process.env.BREVO_SENDER_EMAIL;
const senderName = process.env.BREVO_SENDER_NAME;

@injectable()
export class AuthService {
  constructor(
    @inject("AuthRepository")
    private readonly AuthRepository: IAuthRepository,
    @inject("apiBrevo")
    private readonly apiBrevo: BrevoClient,
  ) {}

  async registerUser(input: UserCreateInputDto): Promise<UserCreateOutputDto> {
    try {
      await validateErros(UserCreateInputDto, input);

      const userExisting = await this.AuthRepository.getOneUser({
        email: input.email,
      });

      if (!!userExisting) {
        throw new Error("Erro");
      }

      const hashedPassword = await hash(input.password, 10);

      const userEntity = await this.AuthRepository.createUser({
        email: input.email,
        name: input.name,
        password: hashedPassword,
      });

      if (!userEntity) {
        throw new Error("erro, Usuário não criado");
      }

      return userEntity;
    } catch (error) {
      throw error;
    }
  }

  async login(input: LoginInputDto): Promise<LoginOutputDto> {
    try {
      validateErros(LoginInputDto, input);
      const user = await this.AuthRepository.getOneUser({
        email: input.email,
      });

      if (!user) {
        throw new Error("Email ou Senha inválidos");
      }

      const passwordCompare = await compare(input.password, user.password);

      if (!passwordCompare) {
        throw Error("Email ou Senha inválidos");
      }

      /**
       * primeira {} -> serve pra guardar dentro do token o id e o email (payload)
       * depois guarda o token (signature)
       * por ultimo diz em quanto tempo ele vai expirar
       */
      const token = jwt.sign({ id: user.id, email: user.email }, secret!, {
        expiresIn: "3h",
      });

      return {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
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
      validateErros(forgotPasswordInputDto, input);

      const emailExisting = await this.AuthRepository.getOneUser({
        email: input.email,
      });

      if (!emailExisting) {
        throw new Error("Erro");
      }

      const pin = Math.floor(100000 + Math.random() * 900000).toString();

      await this.apiBrevo.transactionalEmails.sendTransacEmail({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: input.email,
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

      const hashedPin = await hash(pin, 10);

      const userPinEntity = await this.AuthRepository.requestPin({
        email: input.email,
        pin: hashedPin,
      });

      if (!userPinEntity) {
        throw new Error("Erro");
      }

      return {
        email: input.email,
      };
    } catch (error) {
      throw error;
    }
  }

  async sendPin(input: SendPinInputDto): Promise<SendPinOutputDto> {
    try {
      validateErros(SendPinInputDto, input);
      const emailExisting = await this.AuthRepository.getOneRequestPin({
        email: input.email,
      });

      if (!emailExisting) {
        throw new Error("Erro");
      }

      const pinCompare = await compare(input.pin, emailExisting.pin);

      if (!pinCompare) {
        throw new Error("Erro");
      }

      const token = jwt.sign({ email: input.email }, secretRefresh!, {
        expiresIn: "10m",
      });

      return {
        token,
        email: input.email,
      };
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(input: ResetPassworInputDto): Promise<void> {
    try {
      validateErros(ResetPassworInputDto, input);

      if (input.password !== input.confirmPassword) {
        throw new Error("As senhas devem ser iguais");
      }

      const hashedPassword = await hash(input.password, 10);

      const user = await this.AuthRepository.updateUserPassword({
        email: input.email,
        password: hashedPassword,
      });

      if (!user || user.affected !== 1) {
        throw new Error("Erro ao atualizar a senha");
      }
    } catch (error) {
      throw error;
    }
  }
}
