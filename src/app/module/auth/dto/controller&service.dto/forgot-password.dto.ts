import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsUUID,
  MinLength,
  IsJWT,
  Length,
} from "class-validator";

//Rota 1
export class forgotPasswordInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userEmail!: string;
}

export class forgotPasswordOutputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "o tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userEmail!: string;
}

//Rota 2
export class SendPinInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "o tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userEmail!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @Length(6, 6, { message: "O tamanho tem que ser de 6 digitos" })
  userPin!: string;
}

export class SendPinOutputDto {
  @IsJWT({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  token!: string;
}

//Rota 3

export class ResetPassworInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "o tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @MinLength(8, { message: "O campo deve ter ao menos 8 dígitos" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPassword!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userConfirmPassword!: string;
}
