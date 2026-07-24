import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsNumber,
  IsDate,
  IsBoolean,
} from "class-validator";

export class pinResetInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pinsRequested!: number;

  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @IsDate({ message: "O tipo de dado é inválido" })
  pinsRequestedResetAt!: Date;

  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @IsDate({ message: "O tipo de dado é inválido" })
  pinsExpiredAt!: Date;
}

export class pinResetOutputDto {
  affected!: number | null | undefined;
}

// update em pin e password

export class pinUsedUpdateInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsBoolean({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pinUsed!: boolean;
}

export class pinUsedUpdateOutputDto {
  affected!: number | null | undefined;
}

export class passwordResetedUpdateInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsBoolean({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  passwordReseted!: boolean;
}

export class passwordUsedUpdateOutputDto {
  affected!: number | null | undefined;
}

export class pinUpdateInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;

  @IsNumber({}, { message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pinsRequested?: number;

  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @IsDate({ message: "O tipo de dado é inválido" })
  pinsRequestedResetAt?: Date;

  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  @IsDate({ message: "O tipo de dado é inválido" })
  pinsExpiredAt?: Date;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPin?: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPinIv?: string;

  @IsString({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userPinAuthTag?: string;

  @IsBoolean({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pinUsed?: boolean;

  @IsBoolean({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  passwordReseted?: boolean;
}

export class pinUpdateOutputDto {
  affected!: number | null | undefined;
}
