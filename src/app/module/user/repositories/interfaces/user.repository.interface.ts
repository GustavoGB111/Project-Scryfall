import { UserEntity } from "../../../../entities/UserEntity";
import { UserCreateInputDto } from "../../dto/user-create.dto";

export default abstract class IUserRepository {
  abstract getAll(): Promise<UserEntity[]>;
  abstract createUser(input: UserCreateInputDto): Promise<UserEntity>;
}
