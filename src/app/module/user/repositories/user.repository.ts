import { Repository } from "typeorm";
import IUserRepository from "./interfaces/user.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { AppDataSource } from "../../../../DB/databaseConexion";
import { UserCreateInputDto } from "../dto/user-create.dto";
import {
  UserUpdateNameInputDto,
  UserUpdateNameOutputDto,
} from "../dto/user-update.dto";

import { UserUpdatePasswordInputDto } from "../dto/user-update.dto";
import { UserGetOneInputDto } from "../dto/user-get.dto";
import {
  UserDeleteInputDto,
  UserDeleteOutputDto,
} from "../dto/user-delete.dto";

export class UserRepository extends IUserRepository {
  private userRepository: Repository<UserEntity>;

  constructor() {
    super();
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  async getAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async getOne(input: UserGetOneInputDto): Promise<UserEntity | null> {
    return await this.userRepository.findOne({
      where: { email: input.email },
    });
  }

  async createUser(input: UserCreateInputDto): Promise<UserEntity> {
    const user = await this.userRepository.create(input); // Cria na mémoria o user(como se criasse um registro)
    return await this.userRepository.save(user); // Salva o User no Banco de Dados(como se salvasse o registro)
  }

  async updateUserName(
    input: UserUpdateNameInputDto,
  ): Promise<UserUpdateNameOutputDto> {
    await this.userRepository.update({ id: input.id }, { name: input.name });

    const user = await this.userRepository.findOne({ where: { id: input.id } });

    if (!user) {
      throw new Error("usuário não encontrado");
    }

    return { name: user.name };
  }

  async updateUserPassword(input: UserUpdatePasswordInputDto): Promise<void> {
    const { id, password } = input;
    const user = await this.userRepository.update(
      { id: id },
      { password: password },
    );

    if (user.affected !== 1) {
      throw new Error("user not found");
    }
  }

  async deleteUser(input: UserDeleteInputDto): Promise<UserDeleteOutputDto> {
    const { affected } = await this.userRepository.delete({
      id: input.id,
    });

    return { affected };
  }
}
