import IUserRepository from "./interfaces/user.repository.interface";
import { UserEntity } from "../../../../dataBase/entities/UserEntity";
import { userGetOneInputDto } from "../dto/repository.dto/get-user.dto";
import { userDeleteInputDto, userDeleteOutputDto } from "../dto/repository.dto/delete-user.dto";
import { userUpdateInputDto, userUpdateOutputDto } from "../dto/repository.dto/update-user.dto";
export declare class UserRepository extends IUserRepository {
    private userRepository;
    constructor();
    getUser(input: userGetOneInputDto): Promise<UserEntity | null>;
    getAllUser(): Promise<UserEntity[]>;
    deleteUser(input: userDeleteInputDto): Promise<userDeleteOutputDto>;
    updateUser(input: userUpdateInputDto): Promise<userUpdateOutputDto>;
}
//# sourceMappingURL=user.repository.d.ts.map