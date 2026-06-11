"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const databaseConexion_js_1 = require("./DB/databaseConexion.js");
require("./app/module/user/DIContainer/user.DI.Container.js");
const user_routes_js_1 = __importDefault(require("./app/module/user/routes/user.routes.js"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // pro app entender o json enviado no corpo (body) da requisição
app.use("/user", user_routes_js_1.default); // onde o app(variável q representa o express usa a rota user)
// banco de dados deve iniciar antes do servidor, caso ocorra o contrário poderá dar erro
//inicializando o banco de dados
databaseConexion_js_1.AppDataSource.initialize()
    .then(async () => {
    // mensagem de inicialização do banco de dados
    console.log("Banco de Dados iniciado com sucesso!");
})
    .then(async () => {
    // inicialização do servidor
    app.listen(process.env.PORT, () => {
        //iniciando o servidor
        console.log("Servidor iniciado!");
    });
})
    .catch((erro) => {
    // captura de erros
    console.log(erro); //demonstração do erro caso a inicialização falhe
});
//# sourceMappingURL=server.js.map