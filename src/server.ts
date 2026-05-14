import express from 'express';
import publicRoutes from './routes/public.js';
import { AppDataSource } from './DB/databaseConexion.js';

const app = express();

app.use(express.json());

// Rotas Públicas
app.use('/user', publicRoutes);

//Rotas privadas


//inicializando o banco de dados
AppDataSource.initialize().then(() =>
{

});

app.listen(process.env.PORT!, () => {
  console.log('Servidor iniciado');
});