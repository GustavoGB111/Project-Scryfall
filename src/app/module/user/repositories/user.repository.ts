import { Repository } from "typeorm";
import IUserRepository from "./interfaces/user.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { AppDataSource } from "../../../../DB/databaseConexion";
import {
  UserUpdateNameInputDto,
  UserUpdateNameOutputDto,
} from "../dto/repository.dto/user-update-name.dto";
import { UserGetOneInputDto } from "../dto/repository.dto/user-get.dto";
import {
  UserDeleteInputDto,
  UserDeleteOutputDto,
} from "../dto/repository.dto/user-delete.dto";

export class UserRepository extends IUserRepository {
  private userRepository: Repository<UserEntity>;

  constructor() {
    super();
    // pegar um objeto que faz requisição ao banco de dados para o repositorio x
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  async getAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async getOne(input: UserGetOneInputDto): Promise<UserEntity | null> {
    return await this.userRepository.findOne({
      where: { userEmail: input.userEmail },
    });
  }

  async updateUserName(
    input: UserUpdateNameInputDto,
  ): Promise<UserUpdateNameOutputDto> {
    const user = await this.userRepository.findOne({
      where: { userId: input.userId },
    });

    if (!user) {
      throw new Error("erro ao atualizar nome");
    }

    Object.assign(user, { userName: input.userName }); // converte o user antigo atualizando as propriedades do novo "dto"

    const { userName } = await this.userRepository.save(user); // salva o user no banco de dados e retorna a entidade
    return { userName };
  }

  async deleteUser(input: UserDeleteInputDto): Promise<UserDeleteOutputDto> {
    const { affected } = await this.userRepository.delete({
      userId: input.userId,
    });
    return { affected };
  }
}
