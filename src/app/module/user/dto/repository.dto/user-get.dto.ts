import { IsString, IsEmail, IsNotEmpty } from "class-validator";
export class UserGetOneInputDto {
  @IsEmail({}, { message: "O formato não é válido" })
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;
}
