import IUserRepository from "./interfaces/user.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { UserCreateInputDto } from "../dto/user-create.dto";
import { UserUpdateNameInputDto, UserUpdateNameOutputDto } from "../dto/user-update.dto";
import { UserUpdatePasswordInputDto } from "../dto/user-update.dto";
import { UserGetOneInputDto } from "../dto/user-get.dto";
export declare class UserRepository extends IUserRepository {
    private userRepository;
    constructor();
    getAll(): Promise<UserEntity[]>;
    getOne(input: UserGetOneInputDto): Promise<UserEntity | null>;
    createUser(input: UserCreateInputDto): Promise<UserEntity>;
    updateUserName(input: UserUpdateNameInputDto): Promise<UserUpdateNameOutputDto>;
    updateUserPassword(input: UserUpdatePasswordInputDto): Promise<void>;
}
//# sourceMappingURL=user.repository.d.ts.map