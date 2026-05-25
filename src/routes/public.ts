import express from 'express';
import bcrypt from "bcrypt";

const router = express.Router();

//Register
router.post('/register', async (req, res) => {
    const user = req.body; // pra pegar o body da requisição que foi feita 
    const {email, name, password} = req.body // desestruturação do body

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    // guardar no banco de dados aq e retornar email e name 

    return res.status(201).json(user);
});

//Login

// exportar as rotas
export default router