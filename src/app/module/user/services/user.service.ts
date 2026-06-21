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
        email: input.email,
      });

      if (!!user) {
        throw new Error("User already exist");
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

      const userEntity = await this.userRepository.updateUserName(input);

      if (input.name !== userEntity.name) {
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
       * primeira {} -> serve pra guardar dentro do token o id e o emai (payload)
       * depois guarda o token (signature)
       * por ultimo diz em quanto tempo ele vai expirar
       */
      const token = jwt.sign({ id: user.id, email: user.email }, secret!, {
        expiresIn: "1h",
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
}
