import { DataSource } from "typeorm";
import "dotenv/config";
import path from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!, // necessita do "!" pq o valor é uma icógnita
  database: process.env.DB_DATABASE!, // utiliza do process.env pra pegar no arquivo env
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, "..", "dataBase", "entities", "*.js")], // forma pra selecionar todas as entidades
  subscribers: [],
  migrations: [path.join(__dirname, "..", "dataBase", "migrations", "*.js")], // forma para selecionar todas as migration
});
//Comando para executar a migration e cria-la
// npm run typeorm -- -d ./src/DB/databaseConexion.ts migration:run

//Comando para reverter a migration
// npm run typeorm -- -d ./src/DB/databaseConexion.ts migration:revert
