import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class getPinInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;
}

export class getPinOutputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pin!: string;
}
