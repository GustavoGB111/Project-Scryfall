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
  pinsRequested!: number;
  pinsRequestedResetAt!: Date;
  pinsExpiredAt!: Date;
}

export class getPinUsedInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class getPinUsedOutputDto {
  pinUsed!: boolean;
}

export class getPasswordResetedInputDto {
  @IsString({ message: "O tipo de dado é inválido" })
  @IsUUID("4", { message: "O formato não é válido" })
  @IsNotEmpty({ message: "O campo não pode ser vazio" })
  userId!: string;
}

export class getPasswordResetedOutputDto {
  passwordReseted!: boolean;
}
