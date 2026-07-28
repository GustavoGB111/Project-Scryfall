import IUserRepository from "../repositories/interfaces/user.repository.interface";
import { getOneUserInputDto, getOneUserOutputDto } from "../dto/controler&service.dto/get-user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    getUserMe(input: getOneUserInputDto): Promise<getOneUserOutputDto>;
}
//# sourceMappingURL=user.service.d.ts.map