import { UserCreateInputDto, UserCreateOutputDto } from "../dto/controller&service.dto/user-create.dto";
import IAuthRepository from "../repositories/interfaces/auth.repository.interface";
import { LoginInputDto, LoginOutputDto } from "../dto/controller&service.dto/login.dto";
import { forgotPasswordInputDto, forgotPasswordOutputDto, ResetPassworInputDto, SendPinInputDto, SendPinOutputDto } from "../dto/controller&service.dto/forgot-password.dto";
import { BrevoClient } from "@getbrevo/brevo";
export declare class AuthService {
    private readonly AuthRepository;
    private readonly apiBrevo;
    constructor(AuthRepository: IAuthRepository, apiBrevo: BrevoClient);
    registerUser(input: UserCreateInputDto): Promise<UserCreateOutputDto>;
    login(input: LoginInputDto): Promise<LoginOutputDto>;
    requestPin(input: forgotPasswordInputDto): Promise<forgotPasswordOutputDto>;
    sendPin(input: SendPinInputDto): Promise<SendPinOutputDto>;
    resetPassword(input: ResetPassworInputDto): Promise<void>;
}
//# sourceMappingURL=auth.service.d.ts.map