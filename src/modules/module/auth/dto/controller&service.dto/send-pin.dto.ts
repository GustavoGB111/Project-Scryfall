import { IsEmail, IsString, IsNotEmpty, Length } from "class-validator";

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
  token!: string;
}
