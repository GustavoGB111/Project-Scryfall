import { IsString, IsNotEmpty, MinLength, IsUUID } from "class-validator";

export abstract class UserUpdatePasswordInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(8, { message: "O campo deve ter no mínimo 8 caracteres" })
  userPassword!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPasswordIv!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPasswordAuthTag!: string;
}

export abstract class UserUpdatePasswordOutputDto {
  affected!: number | null | undefined;
}
