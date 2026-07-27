"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Scryfall Project",
            version: "1.0.0",
            description: "Documentação da API gerada com Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./dist/app/module/**/controllers/*.js"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map