import { IsString, IsUUID, IsNotEmpty, IsEnum } from "class-validator";
import { UserRole } from "../../../../../common/enums/user.table.enum";

export class getYourUserInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class getYourUserOutputDto {
  userId!: string;
  userName!: string;
  userEmail!: string;
  userRole!: string;
}

export class getOneUserInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  yourUserId!: string;

  @IsEnum(UserRole, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userRole!: UserRole;
}

export class getOneUserOutputDto {
  userId!: string;
  userName!: string;
  userEmail!: string;
  userRole!: UserRole;
}

export class getUsersInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsEnum(UserRole, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userRole!: UserRole;
}
