import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/interfaces/user.repository.interface";
import {
  UserCreateInputDto,
  UserCreateOutputDto,
} from "../dto/user-create.dto";
import {
  UserUpdateNameInputDto,
  UserUpdateNameOutputDto,
} from "../dto/user-update.dto";
import { compare, hash } from "bcrypt";
import { UserGetOneInputDto } from "../dto/user-get.dto";
import { UserEntity } from "../../../entities/UserEntity";
import { UserLoginInputDto, UserLoginoutputDto } from "../dto/user-login.dto";
import { validateErros } from "../../../../common/validate.erros";
import jwt from "jsonwebtoken";
import { UserDeleteInputDto } from "../dto/user-delete.dto";

const secret = process.env.JWT_SECRET;

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository,
  ) {}

  async getAll() {
    try {
      return this.userRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async getOne(input: UserGetOneInputDto): Promise<UserEntity> {
    try {
      await validateErros(UserGetOneInputDto, input);

      const { email } = input;
      const user = await this.userRepository.getOne({ email });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto> {
    try {
      await validateErros(UserCreateInputDto, input);
      const { name, email, password } = input;

      const user = await this.userRepository.getOne({
        email: email,
      });

      if (!!user) {
        throw new Error("Usuário já existe");
      }

      const hashedPassword = await hash(password, 10);

      const userEntity = await this.userRepository.createUser({
        name,
        email,
        password: hashedPassword,
      });

      return {
        email: userEntity.email,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateUserName(
    input: UserUpdateNameInputDto,
  ): Promise<UserUpdateNameOutputDto> {
    try {
      await validateErros(UserUpdateNameInputDto, input);

      const { name } = input;
      const userEntity = await this.userRepository.updateUserName(input);

      if (name !== userEntity.name) {
        throw new Error("Usuário não atualizado");
      }

      return { name: userEntity.name };
    } catch (error) {
      throw error;
    }
  }

  async loginUser(input: UserLoginInputDto): Promise<UserLoginoutputDto> {
    try {
      await validateErros(UserLoginInputDto, input); // ta parando aq

      const { email, password } = input;
      const user = await this.userRepository.getOne({ email });

      if (!user) {
        throw new Error("Credenciais inválidas");
      }

      const passwordCompare = await compare(password, user.password);

      if (!passwordCompare) {
        throw new Error("Credenciais inválidas");
      }

      /**
       * primeira {} -> serve pra guardar dentro do token o id (payload)
       * depois guarda o token (signature)
       * por ultimo diz em quanto tempo ele vai expirar
       */
      const token = jwt.sign({ id: user.id }, secret!, {
        expiresIn: "1h", // funciona como criação de token
      });
      // Usar o verify com o token e o secret pra pegar o payload

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

  async deleteUser(input: UserDeleteInputDto): Promise<void> {
    try {
      validateErros(UserDeleteInputDto, input);

      const { affected } = await this.userRepository.deleteUser(input);

      if (affected != 1) {
        throw new Error("Falha ao deletar");
      }
    } catch (error) {
      throw error;
    }
  }
}
