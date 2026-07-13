import IAuthRepository from "./interfaces/auth.repository.interface";
import { UserEntity } from "../../../entities/UserEntity";
import { UserCreateInputDto, UserCreateOutputDto } from "../dto/repository.dto/user-create.dto";
import { UserGetOneInputDto } from "../dto/repository.dto/user-get.dto";
import { UserUpdatePasswordInputDto, UserUpdatePasswordOutputDto } from "../dto/repository.dto/user-update-password.dto";
import { getPinInputDto, getPinOutputDto } from "../dto/repository.dto/pin-get-dto";
import { UserRequestPinInputDto, UserRequestPinOutputDto } from "../dto/repository.dto/pin-request.dto";
import { pinDeleteInputDto, pinDeleteOutputDto } from "../dto/repository.dto/pin-delete.dto";
export declare class AuthRepository extends IAuthRepository {
    private userRepository;
    private userPinRepository;
    constructor();
    createUser(input: UserCreateInputDto): Promise<UserCreateOutputDto>;
    getAllUser(): Promise<UserEntity[]>;
    getOneUser(input: UserGetOneInputDto): Promise<UserEntity | null>;
    updateUserPassword(input: UserUpdatePasswordInputDto): Promise<UserUpdatePasswordOutputDto>;
    getOneRequestPin(input: getPinInputDto): Promise<getPinOutputDto | null>;
    requestPin(input: UserRequestPinInputDto): Promise<UserRequestPinOutputDto>;
    deletePin(input: pinDeleteInputDto): Promise<pinDeleteOutputDto>;
}
//# sourceMappingURL=auth.repository.d.ts.map