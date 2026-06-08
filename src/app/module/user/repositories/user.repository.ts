import { Repository } from "typeorm";
import IUserRepository from "./interfaces/user.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { AppDataSource } from "../../../../DB/databaseConexion";
import { UserCreateInputDto } from "../dto/user-create.dto";

export class UserRepository extends IUserRepository {
  private userRepository: Repository<UserEntity>;

  constructor() {
    super();
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  async getAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async createUser(input: UserCreateInputDto): Promise<UserEntity> {
    const user = await this.userRepository.create(input); // Cria na mémoria o user(como se criasse um registro)
    return await this.userRepository.save(user); // Salva o User no Banco de Dados(como se salvasse o registro)
  }
}
