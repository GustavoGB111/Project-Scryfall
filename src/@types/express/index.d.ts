import "express-serve-static-core";
import { UserRole } from "../../common/enums/user.table.enum";

declare module "express-serve-static-core" {
  interface Request {
    userId: string;
    userEmail: string;
    userPin: string;
    userRole: UserRole;
  }
}
