import { UserUpDown } from "../../../../../common/enums/user.up-down-enum";
import { UserRole } from "../../../../../common/enums/user.table.enum";
export declare class updateUserNameInputDto {
    userId: string;
    newName: string;
}
export declare class updateAnyUserRoleInputDto {
    userId: string;
    yourUserId: string;
    userRole: UserRole;
    userUpDown: UserUpDown;
}
export declare class updateAnyUserInputDto {
    userId: string;
    yourUserId: string;
}
//# sourceMappingURL=update-user.dto.d.ts.map