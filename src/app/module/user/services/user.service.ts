import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/interfaces/user.repository.interface";
import {
  getOneUserInputDto,
  getOneUserOutputDto,
  getYourUserInputDto,
  getYourUserOutputDto,
} from "../dto/controler&service.dto/get-user.dto";
import { validateErros } from "../../../../common/validate.erros";
import {
  deleteOneUserInputDto,
  deleteYourUserInputDto,
} from "../dto/controler&service.dto/delete-user.dto";
import {
  updateAnyUserRoleInputDto,
  updateUserNameInputDto,
} from "../dto/controler&service.dto/update-user.dto";
import { UserRole } from "../../../../common/enums/user.table.enum";
import { UserUpDown } from "../../../../common/enums/user.up-down-enum";

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository,
  ) {}

  async getUserMe(input: getYourUserInputDto): Promise<getYourUserOutputDto> {
    try {
      validateErros(getYourUserInputDto, input);

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

  async deleteUserMe(input: deleteYourUserInputDto): Promise<void> {
    try {
      validateErros(deleteYourUserInputDto, input);

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

  async getOneUser(input: getOneUserInputDto): Promise<getOneUserOutputDto> {
    try {
      validateErros(getOneUserInputDto, input);

      if (input.userRole !== UserRole.ADMIN) {
        throw new Error("Você não pode acessar essa requisição");
      }

      const yourUser = await this.userRepository.getUser({
        userId: input.yourUserId,
      });

      if (!yourUser) {
        throw new Error("Usuário não encontrado");
      }

      if (yourUser.userRole !== UserRole.ADMIN) {
        throw new Error("Você não pode acessar essa requisição");
      }

      const user = await this.userRepository.getUser({
        userId: input.userId,
      });

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const { userPassword, userPasswordAuthTag, userPasswordIv, ...response } =
        user;

      if (response.userRole !== UserRole.ADMIN) {
        throw new Error("Você não pode acessar essa requisição");
      }

      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteOneUser(input: deleteOneUserInputDto): Promise<void> {
    try {
      validateErros(deleteOneUserInputDto, input);
      if (input.userRole !== UserRole.ADMIN) {
        throw new Error("Você não pode acessar essa requisição");
      }

      const yourUser = await this.userRepository.getUser({
        userId: input.yourUserId,
      });

      if (!yourUser) {
        throw new Error("Usuário não encontrado");
      }

      if (yourUser.userRole != UserRole.ADMIN) {
        throw new Error("Você não pode acessar essa requisição");
      }

      const user = await this.userRepository.deleteUser({
        userId: input.userId,
      });

      if (!user || user.affected !== 1) {
        throw new Error("O usuário não pôde ser deletado");
      }
    } catch (error) {
      throw error;
    }
  }

  async modifyUserRole(input: updateAnyUserRoleInputDto): Promise<void> {
    try {
      validateErros(updateAnyUserRoleInputDto, input);

      if (input.userRole !== UserRole.ADMIN) {
        throw new Error("Você não pode acessar essa requisição");
      }

      const yourUser = await this.userRepository.getUser({
        userId: input.yourUserId,
      });

      if (!yourUser) {
        throw new Error("Usuário não encontrado");
      }

      if (yourUser.userRole != UserRole.ADMIN) {
        throw new Error("Você não pode acessar essa requisição");
      }

      const userRole = await this.userRepository.getUser({
        userId: input.userId,
      });

      if (!userRole) {
        throw new Error("Usuário não encontrado");
      }

      if (input.userUpDown === UserUpDown.UP) {
        if (userRole.userRole !== UserRole.CLIENT) {
          throw new Error("Você já é um admin");
        }

        const userUpdated = await this.userRepository.updateUser({
          userId: input.userId,
          userRole: UserRole.ADMIN,
        });

        if ((!userUpdated || userUpdated.affected) !== 1) {
          throw new Error("User não pôde ser atualizado");
        }
      } else if (input.userUpDown === UserUpDown.DOWN) {
        if (userRole.userRole !== UserRole.ADMIN) {
          throw new Error("Você já é um client");
        }

        const userUpdated = await this.userRepository.updateUser({
          userId: input.userId,
          userRole: UserRole.CLIENT,
        });

        if (!userUpdated || userUpdated.affected !== 1) {
          throw new Error("User não pôde ser atualizado");
        }
      } else {
        throw new Error("User não pôde ser atualizado");
      }
    } catch (error) {
      throw error;
    }
  }
}
