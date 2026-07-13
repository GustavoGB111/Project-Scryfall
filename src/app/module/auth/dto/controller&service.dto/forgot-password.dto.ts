import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsNumber,
  MinLength,
  MaxLength,
  IsJWT,
} from "class-validator";

//Rota 1
export class forgotPasswordInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;
}

export class forgotPasswordOutputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "o tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;
}

//Rota 2
export class SendPinInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "o tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;

  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(6, { message: "O tamanho tem que ser de 6 digitos" })
  @MaxLength(6, { message: "O tamanho tem que ser de 6 digitos " })
  pin!: string;
}

export class SendPinOutputDto {
  @IsJWT({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  token!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "o tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;
}

//Rota 3

export class ResetPassworInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "o tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @MinLength(8, { message: "O campo deve ter ao menos 8 dígitos" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  password!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  confirmPassword!: string;
}
