import {
  IsString,
  IsUUID,
  IsNotEmpty,
  IsEnum,
  Length,
  IsEmail,
} from "class-validator";
import { UserUpDown } from "../../../../../common/enums/user.up-down-enum";
import { UserRole } from "../../../../../common/enums/user.table.enum";

export class updateUserMeInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @Length(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" })
  userOldPassword!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @Length(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" })
  userNewPassword?: string | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  @Length(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" })
  userNewPasswordConfirm?: string | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  userName?: string | undefined;

  @IsEmail({}, { message: "O tipo do dado é inválido" })
  userEmail?: string | undefined;
}

export class updateAnyUserInputDto {
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

  @IsString({ message: "O tipo de dado é inválido" })
  @Length(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" })
  userNewPassword?: string | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  @Length(8, 255, { message: "O campo deve ter no mínimo 8 caracteres" })
  userNewPasswordConfirm?: string | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  userName?: string | undefined;

  @IsEmail({}, { message: "O tipo do dado é inválido" })
  userEmail?: string | undefined;
}

export class updateAnyUserRoleInputDto {
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

  @IsEnum(UserUpDown, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userUpDown!: UserUpDown;
}
