import { Repository } from "typeorm";
import IUserRepository from "./interfaces/user.repository.interface";
import { UserEntity } from "../../../../database/entities/UserEntity";
import { AppDataSource } from "../../../../database/databaseConexion";
import { userGetOneInputDto } from "../dto/repository.dto/get-user.dto";
import {
  userDeleteInputDto,
  userDeleteOutputDto,
} from "../dto/repository.dto/delete-user.dto";
import {
  userUpdateInputDto,
  userUpdateOutputDto,
} from "../dto/repository.dto/update-user.dto";

export class UserRepository extends IUserRepository {
  private userRepository: Repository<UserEntity>;

  constructor() {
    super();
    // pegar um objeto que faz requisição ao banco de dados para o repositorio x
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  async getUser(input: userGetOneInputDto): Promise<UserEntity | null> {
    const where = input.userId
      ? { userId: input.userId }
      : input.userEmail
        ? { userEmail: input.userEmail }
        : null;

    if (!where) return null;

    return this.userRepository.findOne({ where });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async deleteUser(input: userDeleteInputDto): Promise<userDeleteOutputDto> {
    const { affected } = await this.userRepository.delete({
      userId: input.userId,
    });
    return { affected };
  }

  async updateUser(input: userUpdateInputDto): Promise<userUpdateOutputDto> {
    const user = await this.getUser({ userId: input.userId });
    if (!user) {
      const affected = 0;
      return { affected };
    }
    const { affected } = await this.userRepository.update(
      {
        userId: input.userId,
      },
      {
        userEmail: input.userEmail ?? user.userEmail,
        userName: input.userName ?? user.userName,
        userRole: input.userRole ?? user.userRole,
        userPassword: input.userPassword ?? user.userPassword,
        userPasswordIv: input.userPasswordIv ?? user.userPasswordIv,
        userPasswordAuthTag:
          input.userPasswordAuthTag ?? user.userPasswordAuthTag,
      },
    );

    return { affected };
  }
}
