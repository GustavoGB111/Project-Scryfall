"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
function verifyToken(Token) {
    try {
        const payload = (0, jsonwebtoken_1.verify)(Token, secret);
        return payload;
    }
    catch (error) {
        throw new Error("Token inválido ou expirado");
    }
}
//# sourceMappingURL=verifyToken.js.map