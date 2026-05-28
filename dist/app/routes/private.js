"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/listar-usuarios', async (req, res) => {
    try {
        // buscar a lista de usuarios no Database
        const user = 0;
        res.status(200).json({ message: "Lista de usuarios", user });
    }
    catch (error) {
        res.status(500).json({ message: "Falha no servidor" });
    }
});
exports.default = router;
//# sourceMappingURL=private.js.map