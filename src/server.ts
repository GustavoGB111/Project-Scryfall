import "dotenv/config";
import express from 'express';
import publicRoutes from './app/controllers/public.js';
import privateRoutes from './app/controllers/private.js';
import auth from "./app/middlewares/auth.js";
import { AppDataSource } from './DB/databaseConexion.js';
import routers from "./app/routes/routes.js";

const app = express();

app.use(express.json()); // pro app entender o json enviado no corpo (body) da requisição

// Rotas Públicas
app.use('/user', publicRoutes);

//Rotas privadas
app.use('/user', auth, privateRoutes); // passa primeiro pelo auth para acessar as rotas privadas

app.use(routers);

// banco de dados deve iniciar antes do servidor, caso ocorra o contrário poderá dar erro
//inicializando o banco de dados
AppDataSource.initialize()
.then( async () => { // mensagem de inicialização do banco de dados
  console.log("Banco de Dados iniciado com sucesso!");
})
.then( async () => { // inicialização do servidor
  app.listen(process.env.PORT!, () => { //iniciando o servidor
  console.log('Servidor iniciado!');
  });
})
.catch((erro) => { // captura de erros
  console.log(erro); //demonstração do erro caso a inicialização falhe
});
