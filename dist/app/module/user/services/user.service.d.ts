import IUserRepository from "../repositories/interfaces/user.repository.interface";
import { UserCreateInputDto, UserCreateOutputDto } from "../dto/user-create.dto";
import { UserUpdateNameInputDto, UserUpdateNameOutputDto } from "../dto/user-update.name.dto";
import { UserGetOneInputDto } from "../dto/user-get.dto";
import { UserEntity } from "../../../entities/UserEntity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    getAll(): Promise<UserEntity[]>;
    getOne(input: UserGetOneInputDto): Promise<UserEntity>;
    createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto>;
    updateUserName(input: UserUpdateNameInputDto): Promise<UserUpdateNameOutputDto>;
}
//# sourceMappingURL=user.service.d.ts.map