import "dotenv/config";
import express from "express";
import { AppDataSource } from "./DB/databaseConexion.js";
import "./app/module/user/DIContainer/user.DI.Container.js";
import userRoutes from "./app/module/user/routes/user.routes.js";

const app = express();

app.use(express.json()); // pro app entender o json enviado no corpo (body) da requisição

app.use(userRoutes); // onde o app(variável q representa o express usa a rota user)

// banco de dados deve iniciar antes do servidor, caso ocorra o contrário poderá dar erro
//inicializando o banco de dados
AppDataSource.initialize()
  .then(async () => {
    // mensagem de inicialização do banco de dados
    console.log("Banco de Dados iniciado com sucesso!");
  })
  .then(async () => {
    // inicialização do servidor
    app.listen(process.env.PORT!, () => {
      //iniciando o servidor
      console.log("Servidor iniciado!");
    });
  })
  .catch((erro) => {
    // captura de erros
    console.log(erro); //demonstração do erro caso a inicialização falhe
  });
