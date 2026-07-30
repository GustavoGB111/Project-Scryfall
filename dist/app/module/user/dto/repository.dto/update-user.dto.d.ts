import { UserRole } from "../../../../../common/enums/user.table.enum";
export declare class userUpdateInputDto {
    userId: string;
    userEmail?: string | undefined;
    userName?: string | undefined;
    userRole?: UserRole | undefined;
    userPassword?: string | undefined;
    userPasswordIv?: string | undefined;
    userPasswordAuthTag?: string | undefined;
}
export declare class userUpdateOutputDto {
    affected: number | null | undefined;
}
//# sourceMappingURL=update-user.dto.d.ts.map