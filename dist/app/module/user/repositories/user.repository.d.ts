import IUserRepository from "./interfaces/user.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { UserCreateInputDto } from "../dto/user-create.dto";
export declare class UserRepository extends IUserRepository {
    private userRepository;
    constructor();
    getAll(): Promise<UserEntity[]>;
    createUser(input: UserCreateInputDto): Promise<UserEntity>;
}
//# sourceMappingURL=user.repository.d.ts.map