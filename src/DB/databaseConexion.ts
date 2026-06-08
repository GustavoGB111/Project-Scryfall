import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!, // necessita do "!" pq o valor é uma icógnita
  database: process.env.DB_DATABASE!, // utiliza do process.env pra pegar no arquivo env
  synchronize: true,
  logging: true,
  entities: [__dirname + "/entities/*.ts"], // forma pra selecionar todas as entidades
  subscribers: [],
  migrations: [__dirname + "/migrations/*.ts"], // forma para selecionar todas as migration
});
//Comando para executar a migration e cria-la
// npm run typeorm -- -d ./src/DB/databaseConexion.ts migration:run

//Comando para reverter a migration
// npm run typeorm -- -d ./src/DB/databaseConexion.ts migration:revert
