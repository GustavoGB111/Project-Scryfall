import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsUUID,
  IsDate,
  IsNumber,
  IsBoolean,
} from "class-validator";

// requisição 1 -> enviar email e pedir pin
export class UserRequestPinInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @MinLength(6, { message: "O campo deve ter no mínimo 6 caracteres" })
  userPin!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPinIv!: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPinAuthTag!: string;

  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @IsDate({ message: "O tipo de dado é inválido" })
  pinsExpiredAt!: Date;

  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pinsRequested!: number;

  @IsDate({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pinsRequestedResetAt!: Date;

  @IsBoolean({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pinUsed!: boolean;

  @IsBoolean({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  passwordReseted!: boolean;
}

export class UserRequestPinOutputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}
