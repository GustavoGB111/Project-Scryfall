import { UserEntity } from "../../../../entities/UserEntity";
import { pinDeleteInputDto, pinDeleteOutputDto } from "../../dto/repository.dto/pin-delete.dto";
import { getPinInputDto, getPinOutputDto } from "../../dto/repository.dto/pin-get-dto";
import { UserRequestPinInputDto, UserRequestPinOutputDto } from "../../dto/repository.dto/pin-request.dto";
import { UserCreateInputDto, UserCreateOutputDto } from "../../dto/repository.dto/user-create.dto";
import { UserGetOneInputDto } from "../../dto/repository.dto/user-get.dto";
import { UserUpdatePasswordInputDto, UserUpdatePasswordOutputDto } from "../../dto/repository.dto/user-update-password.dto";
export default abstract class IAuthRepository {
    abstract createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto>;
    abstract getAllUser(): Promise<UserEntity[]>;
    abstract getOneUser(input: UserGetOneInputDto): Promise<UserEntity | null>;
    abstract updateUserPassword(input: UserUpdatePasswordInputDto): Promise<UserUpdatePasswordOutputDto>;
    abstract getOneRequestPin(input: getPinInputDto): Promise<getPinOutputDto | null>;
    abstract requestPin(input: UserRequestPinInputDto): Promise<UserRequestPinOutputDto>;
    abstract deletePin(input: pinDeleteInputDto): Promise<pinDeleteOutputDto>;
}
//# sourceMappingURL=auth.repository.interface.d.ts.map