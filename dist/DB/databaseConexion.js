import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Guxtavu04",
    database: "scryfall_project",
    synchronize: true,
    logging: true,
    entities: [""],
    subscribers: [],
    migrations: []
});
//# sourceMappingURL=databaseConexion.js.map