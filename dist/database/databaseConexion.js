"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, // necessita do "!" pq o valor é uma icógnita
    database: process.env.DB_DATABASE, // utiliza do process.env pra pegar no arquivo env
    synchronize: true,
    logging: true,
    entities: [path_1.default.join(__dirname, "..", "database", "entities", "*.js")], // forma pra selecionar todas as entidades
    subscribers: [],
    migrations: [path_1.default.join(__dirname, "..", "database", "migrations", "*.js")], // forma para selecionar todas as migration
});
//Comando para executar a migration e cria-la
// npm run typeorm -- -d ./src/database/databaseConexion.ts migration:run
//Comando para reverter a migration
// npm run typeorm -- -d ./src/database/databaseConexion.ts migration:revert
//# sourceMappingURL=databaseConexion.js.map