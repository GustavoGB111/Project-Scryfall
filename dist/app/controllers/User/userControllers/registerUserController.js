"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const JWT_SECRET = process.env.JWT_SECRET;
const userRegisterRouter = express_1.default.Router();
//Register
userRegisterRouter.post('/register', async (req, res) => {
    try {
        const user = req.body; // pra pegar o body da requisição que foi feita 
        const { email, name, password } = user; // desestruturação do body
        const salt = await bcrypt_1.default.genSalt(10);
        const hashPassword = await bcrypt_1.default.hash(password, salt);
        // guardar no banco de dados aq por meio do typeORM 
        return res.status(201).json({ email, name });
    }
    catch (error) {
        res.status(500).json({ message: "Erro no Servidor, tente novamente" });
    }
});
exports.default = userRegisterRouter;
//# sourceMappingURL=registerUserController.js.map