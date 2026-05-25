import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, // necessita do "!" pq o valor é uma icógnita
    database: process.env.DB_DATABASE, // utiliza do process.env pra pegar no arquivo env
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: []
});
//# sourceMappingURL=databaseConexion.js.map