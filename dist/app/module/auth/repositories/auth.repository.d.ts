import IAuthRepository from "./interfaces/auth.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { UserPinEntity } from "../../../entities/UserPinEntity";
import { UserCreateInputDto, UserCreateOutputDto } from "../dto/repository.dto/user-create.dto";
import { UserGetOneInputDto } from "../dto/repository.dto/user-get.dto";
import { UserUpdatePasswordInputDto, UserUpdatePasswordOutputDto } from "../dto/repository.dto/user-update-password.dto";
import { getPinInputDto } from "../dto/repository.dto/pin-get-dto";
import { UserRequestPinInputDto, UserRequestPinOutputDto } from "../dto/repository.dto/pin-request.dto";
import { pinUpdateInputDto, pinUpdateOutputDto } from "../dto/repository.dto/pin-update.dto";
export declare class AuthRepository extends IAuthRepository {
    private userRepository;
    private userPinRepository;
    constructor();
    createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto>;
    getAllUser(): Promise<UserEntity[]>;
    getOneUser(input: UserGetOneInputDto): Promise<UserEntity | null>;
    updateUserPassword(input: UserUpdatePasswordInputDto): Promise<UserUpdatePasswordOutputDto>;
    getOnePin(input: getPinInputDto): Promise<UserPinEntity | null>;
    createPin(input: UserRequestPinInputDto): Promise<UserRequestPinOutputDto>;
    updatePin(input: pinUpdateInputDto): Promise<pinUpdateOutputDto>;
}
//# sourceMappingURL=auth.repository.d.ts.map