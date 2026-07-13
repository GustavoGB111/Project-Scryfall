import { IsString, IsNotEmpty, MinLength, IsEmail } from "class-validator";

export abstract class UserUpdatePasswordInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(8, { message: "O campo deve ter no mínimo 8 caracteres" })
  password!: string;
}

export abstract class UserUpdatePasswordOutputDto {
  affected!: number | null | undefined;
}
