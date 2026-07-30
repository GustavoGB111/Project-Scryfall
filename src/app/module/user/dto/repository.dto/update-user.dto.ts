import { IsString, IsUUID, IsNotEmpty, IsEmail, IsEnum } from "class-validator";
import { UserRole } from "../../../../../common/enums/user.table.enum";

export class userUpdateInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  userEmail?: string | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  userName?: string | undefined;

  @IsEnum(UserRole, { message: "O tipo de dado é inválido" })
  userRole?: UserRole | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  userPassword?: string | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  userPasswordIv?: string | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  userPasswordAuthTag?: string | undefined;
}

export class userUpdateOutputDto {
  affected: number | null | undefined;
}
