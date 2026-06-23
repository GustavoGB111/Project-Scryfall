import IUserRepository from "../repositories/interfaces/user.repository.interface";
import { UserCreateInputDto, UserCreateOutputDto } from "../dto/user-create.dto";
import { UserUpdateNameInputDto, UserUpdateNameOutputDto } from "../dto/user-update.dto";
import { UserGetOneInputDto } from "../dto/user-get.dto";
import { UserEntity } from "../../../entities/UserEntity";
import { UserLoginInputDto, UserLoginoutputDto } from "../dto/user-login.dto";
import { UserDeleteInputDto } from "../dto/user-delete.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    getAll(): Promise<UserEntity[]>;
    getOne(input: UserGetOneInputDto): Promise<UserEntity>;
    createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto>;
    updateUserName(input: UserUpdateNameInputDto): Promise<UserUpdateNameOutputDto>;
    loginUser(input: UserLoginInputDto): Promise<UserLoginoutputDto>;
    deleteUser(input: UserDeleteInputDto): Promise<void>;
}
//# sourceMappingURL=user.service.d.ts.map