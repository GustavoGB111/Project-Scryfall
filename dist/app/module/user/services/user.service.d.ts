import IUserRepository from "../repositories/interfaces/user.repository.interface";
import { getOneUserInputDto, getOneUserOutputDto, getUsersInputDto, getYourUserInputDto, getYourUserOutputDto } from "../dto/controler&service.dto/get-user.dto";
import { deleteOneUserInputDto, deleteYourUserInputDto } from "../dto/controler&service.dto/delete-user.dto";
import { updateAnyUserInputDto, updateAnyUserRoleInputDto, updateUserMeInputDto } from "../dto/controler&service.dto/update-user.dto";
import { UserEntity } from "../../../entities/UserEntity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    getUserMe(input: getYourUserInputDto): Promise<getYourUserOutputDto>;
    deleteUserMe(input: deleteYourUserInputDto): Promise<void>;
    updateUserMe(input: updateUserMeInputDto): Promise<void>;
    getOneUser(input: getOneUserInputDto): Promise<getOneUserOutputDto>;
    updateOneUser(input: updateAnyUserInputDto): Promise<void>;
    deleteOneUser(input: deleteOneUserInputDto): Promise<void>;
    modifyUserRole(input: updateAnyUserRoleInputDto): Promise<void>;
    getAllUser(input: getUsersInputDto): Promise<UserEntity[]>;
}
//# sourceMappingURL=user.service.d.ts.map