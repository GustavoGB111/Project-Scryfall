"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
const userLoginRouter = express_1.default.Router();
userLoginRouter.post('/login', async (req, res) => {
    try {
        const user = req.body;
        const { email, password } = user;
        // buscar o usuario no banco de dados pelo email usando typeORM
        if (!user)
            return res.status(404).json({ message: "Erro de usuário não encontrado" }); // retorna caso o user não seja encontrado
        const isMatch = await bcrypt_1.default.compare(password, "hashpassword"); // compara a senha e a senha do banco de dados em hash, pode dar true e false
        if (!isMatch)
            return res.status(404).json({ message: "Erro de senha inválida" });
        const token = jsonwebtoken_1.default.sign({ id: "userID" }, JWT_SECRET, { expiresIn: '2h' });
        return res.status(200).json({ token }); // retorna o usuario do database
    }
    catch (error) {
        res.status(500).json({ message: "Erro no Servidor, tente novamente" });
    }
});
exports.default = userLoginRouter;
//# sourceMappingURL=LoginUserController.js.map