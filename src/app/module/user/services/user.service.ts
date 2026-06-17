import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/interfaces/user.repository.interface";
import {
  UserCreateInputDto,
  UserCreateOutputDto,
} from "../dto/user-create.dto";
import {
  UserUpdateNameInputDto,
  UserUpdateNameOutputDto,
} from "../dto/user-update.name.dto";
import { hash } from "bcrypt";
import { UserGetOneInputDto } from "../dto/user-get.dto";
import { UserEntity } from "../../../entities/UserEntity";

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
      throw new Error("Erro aqui");
    }
  }

  async getOne(input: UserGetOneInputDto): Promise<UserEntity> {
    try {
      const { email } = input;
      if (!email) {
        throw new Error("email ou id inválidos");
      }
      if (email?.trim() === "") {
        throw new Error("Email não pode ser vazio");
      }

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
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new Error("Algum campo nulo");
      }
      if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
        throw new Error("Algum campo é vazio");
      }

      const userExisting = await this.userRepository.getOne({
        email: input.email,
      });

      if (!userExisting) {
        throw new Error("User not found");
      }

      if (password.trim().length < 8) {
        throw new Error("Sua senha não pode ter menos de 8 caracteres");
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
      throw new Error("Deu erro aqui");
    }
  }

  async updateUserName(
    input: UserUpdateNameInputDto,
  ): Promise<UserUpdateNameOutputDto> {
    try {
      if (!input.name || !input.id) {
        throw new Error("O nome ou id não pode ser nulo");
      }

      const userEntity = await this.userRepository.updateUserName(input);

      if (input.name !== userEntity.name) {
        throw new Error("Usuário não atualizado");
      }

      return { name: userEntity.name };
    } catch (error) {
      throw new Error("Deu erro aqui");
    }
  }
}
