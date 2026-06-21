declare class UserDto {
    id: number;
    name: string;
    email: string;
}
export declare class UserLoginInputDto {
    email: string;
    password: string;
}
export declare abstract class UserLoginoutputDto {
    token: string;
    user: UserDto;
}
export {};
//# sourceMappingURL=user-login.dto.d.ts.map