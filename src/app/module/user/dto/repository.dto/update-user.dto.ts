import { IsString, IsUUID, IsNotEmpty, IsEmail } from "class-validator";
import { UserRole } from "../../../../../common/enums/user.table.enum";

export class userUpdateInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userEmail?: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userName?: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userRole?: UserRole;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPassword?: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPasswordIv?: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPasswordAuthTag?: string;
}

export class userUpdateOutputDto {
  affected: number | null | undefined;
}
