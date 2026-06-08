"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRepository_1 = __importDefault(require("../../../repositories/UserRepository"));
const userGetRouter = (0, express_1.Router)();
// significa que estamos usando uma variavel q representa o express e possibilita o uso de get, post, put, etc...
userGetRouter.get('/', async (req, res) => {
    try {
        const users = await UserRepository_1.default.getUsers();
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({ message: "Erro no servidor" });
    }
});
exports.default = userGetRouter;
//# sourceMappingURL=UserController.js.map