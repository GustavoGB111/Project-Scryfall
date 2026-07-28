import { UserRole } from "../../../../../common/enums/user.table.enum";
export declare class userUpdateInputDto {
    userId: string;
    userEmail?: string;
    userName?: string;
    userRole?: UserRole;
    userPassword?: string;
    userPasswordIv?: string;
    userPasswordAuthTag?: string;
}
export declare class userUpdateOutputDto {
    affected: number | null | undefined;
}
//# sourceMappingURL=update-user.dto.d.ts.map