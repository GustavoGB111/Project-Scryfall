import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/interfaces/user.repository.interface";
import {
  getOneUserInputDto,
  getOneUserOutputDto,
} from "../dto/controler&service.dto/get-user.dto";
import { validateErros } from "../../../../common/validate.erros";
import { deleteOneUserInputDto } from "../dto/controler&service.dto/delete-user.dto";
import { updateUserNameInputDto } from "../dto/controler&service.dto/update-user.dto";

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository,
  ) {}

  async getUserMe(input: getOneUserInputDto): Promise<getOneUserOutputDto> {
    try {
      validateErros(getOneUserInputDto, input);

      const user = await this.userRepository.getUser({ userId: input.userId });

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const { userPassword, userPasswordIv, userPasswordAuthTag, ...result } =
        user;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteUserMe(input: deleteOneUserInputDto): Promise<void> {
    try {
      validateErros(deleteOneUserInputDto, input);

      const user = await this.userRepository.getUser({ userId: input.userId });
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const userDeleted = await this.userRepository.deleteUser({
        userId: input.userId,
      });
      if (!userDeleted) {
        throw new Error("Usuário não pôde ser deletado");
      }
    } catch (error) {
      throw error;
    }
  }

  async updateUserNameMe(input: updateUserNameInputDto): Promise<void> {
    try {
      validateErros(updateUserNameInputDto, input);

      const user = await this.userRepository.getUser({ userId: input.userId });
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const userUpdated = await this.userRepository.updateUser({
        userId: input.userId,
        userName: input.newName,
      });

      if (!userUpdated || userUpdated.affected !== 1) {
        throw new Error("Usuário não pôde ser atualizado");
      }
    } catch (error) {
      throw error;
    }
  }
}
