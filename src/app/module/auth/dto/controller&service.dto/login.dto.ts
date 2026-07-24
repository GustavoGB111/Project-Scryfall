import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  Min,
  IsNumber,
  IsJWT,
  IsObject,
} from "class-validator";

class UserDto {
  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @Min(1, { message: "O valor deve ser no mínimo 1" })
  userId!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(3, { message: "O campo deve ter no mínimo 3 caracteres" })
  userName!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userEmail!: string;
}

export class LoginInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsEmail({}, { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userEmail!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(8, { message: "O campo deve ter no mínimo 8 caracteres" })
  userPassword!: string;
}

export abstract class LoginOutputDto {
  @IsJWT({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  token!: string;

  @IsObject({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  user!: UserDto;
}
