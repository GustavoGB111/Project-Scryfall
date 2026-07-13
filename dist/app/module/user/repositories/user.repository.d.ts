import IUserRepository from "./interfaces/user.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { UserUpdateNameInputDto, UserUpdateNameOutputDto } from "../dto/repository.dto/user-update-name.dto";
import { UserGetOneInputDto } from "../dto/repository.dto/user-get.dto";
import { UserDeleteInputDto, UserDeleteOutputDto } from "../dto/repository.dto/user-delete.dto";
export declare class UserRepository extends IUserRepository {
    private userRepository;
    private userPinRepository;
    constructor();
    getAll(): Promise<UserEntity[]>;
    getOne(input: UserGetOneInputDto): Promise<UserEntity | null>;
    updateUserName(input: UserUpdateNameInputDto): Promise<UserUpdateNameOutputDto>;
    deleteUser(input: UserDeleteInputDto): Promise<UserDeleteOutputDto>;
}
//# sourceMappingURL=user.repository.d.ts.map