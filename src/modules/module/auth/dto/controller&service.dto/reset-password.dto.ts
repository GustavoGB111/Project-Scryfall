import { IsString, IsNotEmpty, IsUUID, MinLength } from "class-validator";

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
