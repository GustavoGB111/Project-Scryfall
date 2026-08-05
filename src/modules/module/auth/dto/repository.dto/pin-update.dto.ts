import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsNumber,
  IsDate,
  IsBoolean,
} from "class-validator";

export class pinUpdateInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pinsRequested?: number | undefined;

  @IsDate({ message: "O tipo de dado é inválido" })
  pinsRequestedResetAt?: Date | undefined;

  @IsDate({ message: "O tipo de dado é inválido" })
  pinsExpiredAt?: Date | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  userPin?: string | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  userPinIv?: string | undefined;

  @IsString({ message: "O tipo de dado é inválido" })
  userPinAuthTag?: string | undefined;

  @IsBoolean({ message: "O tipo de dado é inválido" })
  pinUsed?: boolean | undefined;

  @IsBoolean({ message: "O tipo de dado é inválido" })
  passwordReseted?: boolean | undefined;
}

export class pinUpdateOutputDto {
  affected!: number | null | undefined;
}
