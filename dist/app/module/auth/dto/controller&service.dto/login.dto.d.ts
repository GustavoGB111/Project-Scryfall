declare class UserDto {
    userId: string;
    userName: string;
    userEmail: string;
}
export declare class LoginInputDto {
    userEmail: string;
    userPassword: string;
}
export declare abstract class LoginOutputDto {
    token: string;
    user: UserDto;
}
export {};
//# sourceMappingURL=login.dto.d.ts.map