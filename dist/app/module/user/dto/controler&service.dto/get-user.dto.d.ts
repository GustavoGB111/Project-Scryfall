import { UserRole } from "../../../../../common/enums/user.table.enum";
export declare class getYourUserInputDto {
    userId: string;
}
export declare class getYourUserOutputDto {
    userId: string;
    userName: string;
    userEmail: string;
    userRole: string;
}
export declare class getOneUserInputDto {
    userId: string;
    yourUserId: string;
    userRole: UserRole;
}
export declare class getOneUserOutputDto {
    userId: string;
    userName: string;
    userEmail: string;
    userRole: UserRole;
}
//# sourceMappingURL=get-user.dto.d.ts.map