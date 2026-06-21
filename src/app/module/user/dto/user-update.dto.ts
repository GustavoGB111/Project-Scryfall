import {
  IsNumber,
  IsString,
  IsNotEmpty,
  MinLength,
  Min,
} from "class-validator";

export class UserUpdateNameInputDto {
  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @Min(1, { message: "O valor deve ser no mínimo 1" })
  id!: number;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(3, { message: "O campo deve ter no mínimo 3 caracteres" })
  name!: string;
}

export abstract class UserUpdateNameOutputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(3, { message: "O campo deve ter no mínimo 3 caracteres" })
  name!: string;
}

export abstract class UserUpdatePasswordInputDto {
  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @Min(1, { message: "O valor deve ser no mínimo 1" })
  id!: number;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(8, { message: "O campo deve ter no mínimo 8 caracteres" })
  password!: string;
}
