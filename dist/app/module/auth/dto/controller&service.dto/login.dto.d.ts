declare class UserDto {
    id: number;
    name: string;
    email: string;
}
export declare class LoginInputDto {
    email: string;
    password: string;
}
export declare abstract class LoginOutputDto {
    token: string;
    user: UserDto;
}
export {};
//# sourceMappingURL=login.dto.d.ts.map