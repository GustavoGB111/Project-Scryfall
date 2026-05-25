import "dotenv/config";
import express from 'express';
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import auth from "./middlewares/auth.js";
import { AppDataSource } from './DB/databaseConexion.js';
const app = express();
app.use(express.json());
// Rotas Públicas
app.use('/user', publicRoutes);
//Rotas privadas
app.use('/user', auth, privateRoutes); // passa primeiro pelo auth para acessar as rotas privadas
//inicializando o banco de dados
AppDataSource.initialize().then(() => {
});
app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado');
});
//# sourceMappingURL=server.js.map