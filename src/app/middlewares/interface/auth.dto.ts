import { UserRole } from "../../../common/enums/user.table.enum";

export interface authOutputDTO {
  userId: number;
  userEmail: string;
  userRole: UserRole;
}
