import { UserEntity } from "../../../../entities/UserEntity";
import { UserCreateInputDto } from "../../dto/user-create.dto";
import { UserDeleteInputDto, UserDeleteOutputDto } from "../../dto/user-delete.dto";
import { UserGetOneInputDto } from "../../dto/user-get.dto";
import { UserUpdateNameInputDto, UserUpdateNameOutputDto } from "../../dto/user-update.dto";
import { UserUpdatePasswordInputDto } from "../../dto/user-update.dto";
export default abstract class IUserRepository {
    abstract getAll(): Promise<UserEntity[]>;
    abstract getOne(input: UserGetOneInputDto): Promise<UserEntity | null>;
    abstract createUser(input: UserCreateInputDto): Promise<UserEntity>;
    abstract updateUserPassword(input: UserUpdatePasswordInputDto): Promise<void>;
    abstract updateUserName(input: UserUpdateNameInputDto): Promise<UserUpdateNameOutputDto>;
    abstract deleteUser(input: UserDeleteInputDto): Promise<UserDeleteOutputDto>;
}
//# sourceMappingURL=user.repository.interface.d.ts.map