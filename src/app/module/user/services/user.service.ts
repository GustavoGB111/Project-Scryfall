import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/interfaces/user.repository.interface";
import {
  UserUpdateNameInputDto,
  UserUpdateNameOutputDto,
} from "../dto/controler&service.dto/user-update.name.dto";
import { UserGetOneInputDto } from "../dto/controler&service.dto/user-get.dto";
import { UserEntity } from "../../../entities/UserEntity";
import { UserDeleteInputDto } from "../dto/controler&service.dto/user-delete.dto";
import { validateErros } from "../../../../common/validate.erros";

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

      const { userEmail } = input;
      const user = await this.userRepository.getOne({ userEmail });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUserName(
    input: UserUpdateNameInputDto,
  ): Promise<UserUpdateNameOutputDto> {
    try {
      await validateErros(UserUpdateNameInputDto, input);

      const { userName } = input;
      const userEntity = await this.userRepository.updateUserName(input);

      if (userName !== userEntity.userName || !userEntity) {
        throw new Error("Usuário não atualizado");
      }

      return { userName: userEntity.userName };
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(input: UserDeleteInputDto): Promise<void> {
    try {
      validateErros(UserDeleteInputDto, input);
      const deleted = await this.userRepository.deleteUser(input);

      if (!deleted || deleted.affected !== 1) {
        throw new Error("Usuário não foi deletado");
      }
    } catch (error) {
      throw error;
    }
  }
}
