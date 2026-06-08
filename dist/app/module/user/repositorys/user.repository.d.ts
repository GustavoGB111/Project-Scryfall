import { IUserRepository } from "./interfaces/user.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { UserInputDto } from "../dto/user-create.dto";
export declare class UserRepository extends IUserRepository {
    private userRepository;
    constructor();
    getAll(): Promise<UserEntity[]>;
    createUser(input: UserInputDto): Promise<UserEntity>;
}
//# sourceMappingURL=user.repository.d.ts.map