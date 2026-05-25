import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string
const router = express.Router();

//Register
router.post('/register', async (req, res) => {
    try {
        const user = req.body as {email: string, name: string, password: string}; // pra pegar o body da requisição que foi feita 
        const {email, name, password} = user // desestruturação do body

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // guardar no banco de dados aq por meio do typeORM 

        return res.status(201).json({email, name});        
    } catch (error) {
        res.status(500).json({message: "Erro no Servidor, tente novamente"});
    }
});

//Login
router.post('/login', async (req, res) => {
try {
    const user = req.body as {email: string, password:string}
    const {email, password} = user 

    // buscar o usuario no banco de dados pelo email usando typeORM
    if(!user) return res.status(404).json({ message: "Erro de usuário não encontrado"}); // retorna caso o user não seja encontrado
    
    const isMatch = await bcrypt.compare(password, "hashpassword") // compara a senha e a senha do banco de dados em hash, pode dar true e false
    if (!isMatch) return res.status(404).json({message: "Erro de senha inválida"});

    const token = jwt.sign({ id: "userID"}, JWT_SECRET, {expiresIn: '2h'});

    return res.status(200).json({token}) // retorna o usuario do database
} catch (error) {
    res.status(500).json({message: "Erro no Servidor, tente novamente"});
}
});

// exportar as rotas
export default router