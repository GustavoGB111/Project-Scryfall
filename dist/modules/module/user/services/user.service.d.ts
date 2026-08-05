import IUserRepository from "../repositories/interfaces/user.repository.interface";
import { getYourUserInputDto, getYourUserOutputDto } from "../dto/controler&service.dto/get-user.dto";
import { getOneUserInputDto, getOneUserOutputDto } from "../dto/controler&service.dto/get-user-any.dto";
import { getUsersInputDto } from "../dto/controler&service.dto/get-user-all.dto";
import { deleteYourUserInputDto } from "../dto/controler&service.dto/delete-user-me.dto";
import { deleteOneUserInputDto } from "../dto/controler&service.dto/delete-user-any.dto";
import { updateUserMeInputDto } from "../dto/controler&service.dto/update-user-me.dto";
import { updateAnyUserInputDto } from "../dto/controler&service.dto/update-user-any.dto";
import { updateAnyUserRoleInputDto } from "../dto/controler&service.dto/update-user-role.dto";
import { UserEntity } from "../../../../database/entities/UserEntity";
import { Encrypt } from "../../../../common/encryption";
export declare class UserService {
    private readonly userRepository;
    private readonly Encrypt;
    constructor(userRepository: IUserRepository, Encrypt: Encrypt);
    getUserMe(input: getYourUserInputDto): Promise<getYourUserOutputDto>;
    deleteUserMe(input: deleteYourUserInputDto): Promise<void>;
    updateUserMe(input: updateUserMeInputDto): Promise<void>;
    getOneUser(input: getOneUserInputDto): Promise<getOneUserOutputDto>;
    getAllUser(input: getUsersInputDto): Promise<UserEntity[]>;
    updateOneUser(input: updateAnyUserInputDto): Promise<void>;
    deleteOneUser(input: deleteOneUserInputDto): Promise<void>;
    modifyUserRole(input: updateAnyUserRoleInputDto): Promise<void>;
}
//# sourceMappingURL=user.service.d.ts.map