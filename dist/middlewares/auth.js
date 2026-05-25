import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization; // pegando o token
        if (!token)
            return res.status(401).json({ message: 'Acesso negado' });
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
        // req.userId = decoded.id; // para guardar dentro do header o id 
        next(); //next é a permissão de continuar após o middleware        
    }
    catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};
export default auth;
//# sourceMappingURL=auth.js.map