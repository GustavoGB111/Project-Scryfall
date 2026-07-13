import IUserRepository from "../repositories/interfaces/user.repository.interface";
import { UserUpdateNameInputDto, UserUpdateNameOutputDto } from "../dto/controler&service.dto/user-update.name.dto";
import { UserGetOneInputDto } from "../dto/controler&service.dto/user-get.dto";
import { UserEntity } from "../../../entities/UserEntity";
import { UserDeleteInputDto } from "../dto/controler&service.dto/user-delete.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    getAll(): Promise<UserEntity[]>;
    getOne(input: UserGetOneInputDto): Promise<UserEntity>;
    updateUserName(input: UserUpdateNameInputDto): Promise<UserUpdateNameOutputDto>;
    deleteUser(input: UserDeleteInputDto): Promise<void>;
}
//# sourceMappingURL=user.service.d.ts.map