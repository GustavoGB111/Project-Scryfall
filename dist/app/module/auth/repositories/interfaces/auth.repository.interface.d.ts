import { UserEntity } from "../../../../entities/UserEntity";
import { UserPinEntity } from "../../../../entities/UserPinEntity";
import { getPinInputDto } from "../../dto/repository.dto/pin-get-dto";
import { UserRequestPinInputDto, UserRequestPinOutputDto } from "../../dto/repository.dto/pin-request.dto";
import { pinUpdateInputDto, pinUpdateOutputDto } from "../../dto/repository.dto/pin-update.dto";
import { UserCreateInputDto, UserCreateOutputDto } from "../../dto/repository.dto/user-create.dto";
import { UserGetOneInputDto } from "../../dto/repository.dto/user-get.dto";
import { UserUpdatePasswordInputDto, UserUpdatePasswordOutputDto } from "../../dto/repository.dto/user-update-password.dto";
export default abstract class IAuthRepository {
    abstract createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto>;
    abstract getAllUser(): Promise<UserEntity[]>;
    abstract getOneUser(input: UserGetOneInputDto): Promise<UserEntity | null>;
    abstract updateUserPassword(input: UserUpdatePasswordInputDto): Promise<UserUpdatePasswordOutputDto>;
    abstract getOnePin(input: getPinInputDto): Promise<UserPinEntity | null>;
    abstract createPin(input: UserRequestPinInputDto): Promise<UserRequestPinOutputDto>;
    abstract updatePin(input: pinUpdateInputDto): Promise<pinUpdateOutputDto>;
}
//# sourceMappingURL=auth.repository.interface.d.ts.map