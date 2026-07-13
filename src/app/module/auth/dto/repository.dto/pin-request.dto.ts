import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";

// requisição 1 -> enviar email e pedir pin
export class UserRequestPinInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(6, { message: "O campo deve ter no mínimo 6 caracteres" })
  pin!: string;
}

export class UserRequestPinOutputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;
}
