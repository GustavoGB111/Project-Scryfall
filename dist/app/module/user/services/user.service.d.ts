import IUserRepository from "../repositories/interfaces/user.repository.interface";
import { getOneUserInputDto, getOneUserOutputDto, getYourUserInputDto, getYourUserOutputDto } from "../dto/controler&service.dto/get-user.dto";
import { deleteOneUserInputDto, deleteYourUserInputDto } from "../dto/controler&service.dto/delete-user.dto";
import { updateAnyUserRoleInputDto, updateUserNameInputDto } from "../dto/controler&service.dto/update-user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    getUserMe(input: getYourUserInputDto): Promise<getYourUserOutputDto>;
    deleteUserMe(input: deleteYourUserInputDto): Promise<void>;
    updateUserNameMe(input: updateUserNameInputDto): Promise<void>;
    getOneUser(input: getOneUserInputDto): Promise<getOneUserOutputDto>;
    deleteOneUser(input: deleteOneUserInputDto): Promise<void>;
    modifyUserRole(input: updateAnyUserRoleInputDto): Promise<void>;
}
//# sourceMappingURL=user.service.d.ts.map