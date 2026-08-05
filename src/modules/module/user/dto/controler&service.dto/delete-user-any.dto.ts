import { IsUUID, IsNotEmpty, IsEnum } from "class-validator";
import { UserRole } from "../../../../../common/enums/user.table.enum";

export class deleteOneUserInputDto {
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  yourUserId!: string;

  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsEnum(UserRole, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userRole!: UserRole;
}
