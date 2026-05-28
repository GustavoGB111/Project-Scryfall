"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const public_js_1 = __importDefault(require("./app/routes/public.js"));
const private_js_1 = __importDefault(require("./app/routes/private.js"));
const auth_js_1 = __importDefault(require("./app/middlewares/auth.js"));
const databaseConexion_js_1 = require("./DB/databaseConexion.js");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // pro app entender o json enviado no corpo (body) da requisição
// Rotas Públicas
app.use('/user', public_js_1.default);
//Rotas privadas
app.use('/user', auth_js_1.default, private_js_1.default); // passa primeiro pelo auth para acessar as rotas privadas
// banco de dados deve iniciar antes do servidor, caso ocorra o contrário poderá dar erro
//inicializando o banco de dados
databaseConexion_js_1.AppDataSource.initialize()
    .then(async () => {
    console.log("Banco de Dados iniciado com sucesso!");
})
    .then(async () => {
    app.listen(process.env.PORT, () => {
        console.log('Servidor iniciado!');
    });
})
    .catch((erro) => {
    console.log(erro); //demonstração do erro caso a inicialização falhe
});
//# sourceMappingURL=server.js.map