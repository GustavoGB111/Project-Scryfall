import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsNumber,
  IsDate,
  IsBoolean,
} from "class-validator";

export class getPinInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class getPinInfosInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class getPinInfosOutputDto {
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

export class getPinUsedInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class getPinUsedOutputDto {
  @IsBoolean({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  pinUsed!: boolean;
}

export class getPasswordResetedInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class getPasswordResetedOutputDto {
  @IsBoolean({ message: "O tipo de dado é inválido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  passwordReseted!: boolean;
}
