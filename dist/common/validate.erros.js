"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateErros = validateErros;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
async function validateErros(Class, input) {
    const dto = (0, class_transformer_1.plainToInstance)(Class, input); // instancia classe e dados pra verficação entre os dois
    const erros = await (0, class_validator_1.validate)(dto); // compara os dados e os contratos e retorna erros
    if (erros.length > 0) {
        throw new Error(`Dados inválidos`);
    }
}
//# sourceMappingURL=validate.erros.js.map