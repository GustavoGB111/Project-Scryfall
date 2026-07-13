import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class pinDeleteInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;
}

export class pinDeleteOutputDto {
  affected!: number | null | undefined;
}
