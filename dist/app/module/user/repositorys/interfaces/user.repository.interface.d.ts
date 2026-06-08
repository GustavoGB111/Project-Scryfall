import { UserEntity } from "../../../../entities/UserEntity";
import { UserInputDto } from "../../dto/user-create.dto";
export declare abstract class IUserRepository {
    abstract getAll(): Promise<UserEntity[]>;
    abstract createUser(input: UserInputDto): Promise<UserEntity>;
}
//# sourceMappingURL=user.repository.interface.d.ts.map