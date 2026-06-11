import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/interfaces/user.repository.interface";
import {
  UserCreateInputDto,
  UserCreateOutputDto,
} from "../dto/user-create.dto";

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

  async createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto> {
    try {
      const userEntity = await this.userRepository.createUser(input);

      return {
        email: userEntity.email,
        status: 201,
      };
    } catch (error) {
      throw new Error("Deu erro aqui");
    }
  }
}
