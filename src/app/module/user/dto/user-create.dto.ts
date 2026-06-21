import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";

// Utilização do Class-Validator para verificação de validade dos atributos
export class UserCreateInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  name!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(8, { message: "O campo deve ter no mínimo 8 caracteres" })
  password!: string;
}

export abstract class UserCreateOutputDto {
  @IsEmail({}, { message: "O formato não é válido" })
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;
}
