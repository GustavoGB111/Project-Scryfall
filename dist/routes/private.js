import express from 'express';
const router = express.Router();
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
export default router;
//# sourceMappingURL=private.js.map