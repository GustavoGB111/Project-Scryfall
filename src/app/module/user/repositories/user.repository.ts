import { Repository } from "typeorm";
import IUserRepository from "./interfaces/user.repository.interface";
import { UserEntity, UserEntityPin } from "../../../entities/UserEntity";
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
  private userPinRepository: Repository<UserEntityPin>;

  constructor() {
    super();
    // pegar um objeto que faz requisição ao banco de dados para o repositorio x
    this.userRepository = AppDataSource.getRepository(UserEntity);
    this.userPinRepository = AppDataSource.getRepository(UserEntityPin);
  }

  async getAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async getOne(input: UserGetOneInputDto): Promise<UserEntity | null> {
    return await this.userRepository.findOne({
      where: { email: input.email },
    });
  }

  async updateUserName(
    input: UserUpdateNameInputDto,
  ): Promise<UserUpdateNameOutputDto> {
    const user = await this.userRepository.findOne({ where: { id: input.id } });

    if (!user) {
      throw new Error("erro ao atualizar nome");
    }

    Object.assign(user, { name: input.name }); // converte o user antigo atualizando as propriedades do novo "dto"

    const { name } = await this.userRepository.save(user);
    return { name };
  }

  async deleteUser(input: UserDeleteInputDto): Promise<UserDeleteOutputDto> {
    const { affected } = await this.userRepository.delete({ id: input.id });
    return { affected };
  }
}
