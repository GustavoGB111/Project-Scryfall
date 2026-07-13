import { UserEntity } from "../../../../entities/UserEntity";
import { UserGetOneInputDto } from "../../dto/repository.dto/user-get.dto";
import { UserUpdateNameInputDto, UserUpdateNameOutputDto } from "../../dto/repository.dto/user-update-name.dto";
import { UserDeleteInputDto, UserDeleteOutputDto } from "../../dto/repository.dto/user-delete.dto";
export default abstract class IUserRepository {
    abstract getAll(): Promise<UserEntity[]>;
    abstract getOne(input: UserGetOneInputDto): Promise<UserEntity | null>;
    abstract updateUserName(input: UserUpdateNameInputDto): Promise<UserUpdateNameOutputDto>;
    abstract deleteUser(input: UserDeleteInputDto): Promise<UserDeleteOutputDto>;
}
//# sourceMappingURL=user.repository.interface.d.ts.map