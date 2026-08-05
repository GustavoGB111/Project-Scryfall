import { IsEmail, IsString, IsNotEmpty } from "class-validator";

export class forgotPasswordInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userEmail!: string;
}

export class forgotPasswordOutputDto {
  userEmail!: string;
}
