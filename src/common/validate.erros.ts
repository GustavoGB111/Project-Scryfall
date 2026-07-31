import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export async function validateErros<T extends object>(
  Class: ClassConstructor<T>,
  input: object,
): Promise<void> {
  const dto = plainToInstance(Class, input); // instancia classe e dados pra verficação entre os dois

  const erros = await validate(dto); // compara os dados e os contratos e retorna erros

  if (erros.length > 0) {
    throw new Error(`Dados inválidos`);
  }
}
