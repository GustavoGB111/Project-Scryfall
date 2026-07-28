import IUserRepository from "../repositories/interfaces/user.repository.interface";
import { getOneUserInputDto, getOneUserOutputDto } from "../dto/controler&service.dto/get-user.dto";
import { deleteOneUserInputDto } from "../dto/controler&service.dto/delete-user.dto";
import { updateUserNameInputDto } from "../dto/controler&service.dto/update-user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    getUserMe(input: getOneUserInputDto): Promise<getOneUserOutputDto>;
    deleteUserMe(input: deleteOneUserInputDto): Promise<void>;
    updateUserNameMe(input: updateUserNameInputDto): Promise<void>;
}
//# sourceMappingURL=user.service.d.ts.map