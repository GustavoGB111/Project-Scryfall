"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET_REFRESH = process.env.JWT_SECRET_REFRESH;
const authForgotPassword = (req, res, next) => {
    try {
        const token = req.headers.authorization; // pegando o token
        if (!token)
            return res.status(401).json({ message: "Acesso negado" });
        const decoded = jsonwebtoken_1.default.verify(token.replace("Bearer ", ""), JWT_SECRET_REFRESH);
        req.userId = String(decoded.userId);
        next(); //next é a permissão de continuar após o middleware
    }
    catch (error) {
        return res.status(401).json({ message: "Erro no servidor" });
    }
};
exports.default = authForgotPassword;
//# sourceMappingURL=forgot-password.js.map