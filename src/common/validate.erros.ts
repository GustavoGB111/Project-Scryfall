import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export async function validateErros<T extends object>(
  Class: ClassConstructor<T>,
  input: object,
): Promise<void> {
  const dto = plainToInstance(Class, input); // instancia classe e dados pra verficação entre os dois

  const erros = await validate(dto); // compara os dados e os contratos e retorna erros

  if (erros.length > 0) {
    const err = erros.map((erro) => ({
      // mapeia os erros
      campo: erro.property, // pega o campo do erro
      mensagens: Object.values(erro.constraints ?? {}), //pega o erro
    }));
    throw new Error(JSON.stringify(err, null, 2));
  }
}
