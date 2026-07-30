import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/interfaces/user.repository.interface";
import {
  getOneUserInputDto,
  getOneUserOutputDto,
  getUsersInputDto,
  getYourUserInputDto,
  getYourUserOutputDto,
} from "../dto/controler&service.dto/get-user.dto";
import { validateErros } from "../../../../common/validate.erros";
import {
  deleteOneUserInputDto,
  deleteYourUserInputDto,
} from "../dto/controler&service.dto/delete-user.dto";
import {
  updateAnyUserInputDto,
  updateAnyUserRoleInputDto,
  updateUserMeInputDto,
} from "../dto/controler&service.dto/update-user.dto";
import { UserRole } from "../../../../common/enums/user.table.enum";
import { UserUpDown } from "../../../../common/enums/user.up-down-enum";
import { decrypt, encrypt } from "../../../../common/encryption";
import { compare, hash } from "bcrypt";
import { UserEntity } from "../../../entities/UserEntity";

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

  async updateUserMe(input: updateUserMeInputDto): Promise<void> {
    try {
      validateErros(updateUserMeInputDto, input);

      const user = await this.userRepository.getUser({ userId: input.userId });

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const decryptedPassword = await decrypt({
        iv: user.userPasswordIv,
        encrypted: user.userPassword,
        authTag: user.userPasswordAuthTag,
      });

      const comparePassword = await compare(
        input.userOldPassword,
        decryptedPassword,
      );

      if (!comparePassword) {
        throw new Error("Senha Incorreta");
      }

      if (input.userNewPassword) {
        if (input.userNewPassword !== input.userNewPasswordConfirm) {
          throw new Error("As senhas não se coincidem");
        }
        const hashedPassword = await hash(input.userNewPassword, 10);
        const passwordEncryptedInfos = await encrypt(hashedPassword);

        const response = await this.userRepository.updateUser({
          userId: input.userId,
          userEmail: input.userEmail,
          userName: input.userName,
          userPassword: passwordEncryptedInfos.encrypted,
          userPasswordIv: passwordEncryptedInfos.iv,
          userPasswordAuthTag: passwordEncryptedInfos.authTag,
        });
        if (!response || response.affected !== 1) {
          throw new Error("Usuário não pôde ser atualizado");
        }
      } else {
        const response = await this.userRepository.updateUser({
          userId: input.userId,
          userEmail: input.userEmail,
          userName: input.userName,
        });
        if (!response || response.affected !== 1) {
          throw new Error("Usuário não pôde ser atualizado");
        }
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

  async updateOneUser(input: updateAnyUserInputDto): Promise<void> {
    try {
      validateErros(updateAnyUserInputDto, input);
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

      const user = await this.userRepository.getUser({
        userId: input.userId,
      });

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      if (input.userNewPassword) {
        if (input.userNewPassword !== input.userNewPasswordConfirm) {
          throw new Error("As senhas não se coincidem");
        }

        const hashedPassword = await hash(input.userNewPassword, 10);
        const passwordEncryptedInfos = await encrypt(hashedPassword);

        const response = await this.userRepository.updateUser({
          userId: input.userId,
          userEmail: input.userEmail,
          userName: input.userName,
          userPassword: passwordEncryptedInfos.encrypted,
          userPasswordIv: passwordEncryptedInfos.iv,
          userPasswordAuthTag: passwordEncryptedInfos.authTag,
        });
        if (!response || response.affected !== 1) {
          throw new Error("Usuário não pôde ser atualizado");
        }
      } else {
        const response = await this.userRepository.updateUser({
          userId: input.userId,
          userEmail: input.userEmail,
          userName: input.userName,
        });
        if (!response || response.affected !== 1) {
          throw new Error("Usuário não pôde ser atualizado");
        }
      }
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

  async getAllUser(input: getUsersInputDto): Promise<UserEntity[]> {
    try {
      validateErros(getUsersInputDto, input);

      if (input.userRole !== UserRole.ADMIN) {
        throw new Error("Você não pode acessar essa requisição");
      }

      const yourUser = await this.userRepository.getUser({
        userId: input.userId,
      });

      if (!yourUser) {
        throw new Error("Usuário não encontrado");
      }

      if (yourUser.userRole != UserRole.ADMIN) {
        throw new Error("Você não pode acessar essa requisição");
      }

      const response = await this.userRepository.getAllUser();

      return response;
    } catch (error) {
      throw error;
    }
  }
}
