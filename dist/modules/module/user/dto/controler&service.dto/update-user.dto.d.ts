import { UserUpDown } from "../../../../../common/enums/user.up-down-enum";
import { UserRole } from "../../../../../common/enums/user.table.enum";
export declare class updateUserMeInputDto {
    userId: string;
    userOldPassword: string;
    userNewPassword?: string | undefined;
    userNewPasswordConfirm?: string | undefined;
    userName?: string | undefined;
    userEmail?: string | undefined;
}
export declare class updateAnyUserInputDto {
    userId: string;
    yourUserId: string;
    userRole: UserRole;
    userNewPassword?: string | undefined;
    userNewPasswordConfirm?: string | undefined;
    userName?: string | undefined;
    userEmail?: string | undefined;
}
export declare class updateAnyUserRoleInputDto {
    userId: string;
    yourUserId: string;
    userRole: UserRole;
    userUpDown: UserUpDown;
}
//# sourceMappingURL=update-user.dto.d.ts.map