import IUserRepository from "../repositories/interfaces/user.repository.interface";
import { UserCreateInputDto, UserCreateOutputDto } from "../dto/user-create.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    getAll(): Promise<import("../../../entities/UserEntity").UserEntity[]>;
    createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto>;
}
//# sourceMappingURL=user.service.d.ts.map