import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  Min,
  IsNumber,
} from "class-validator";

class UserDto {
  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @Min(1, { message: "O valor deve ser no mínimo 1" })
  id!: number;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(3, { message: "O campo deve ter no mínimo 3 caracteres" })
  name!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;
}

export class UserLoginInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  email!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(8, { message: "O campo deve ter no mínimo 8 caracteres" })
  password!: string;
}

export abstract class UserLoginoutputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  token!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  user!: UserDto;
}
