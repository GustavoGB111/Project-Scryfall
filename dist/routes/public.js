import express from 'express';
const router = express.Router();
//Register
router.post('/register', (req, res) => {
    const user = req.body;
    return res.status(201).json(user);
});
//Login
// exportar as rotas
export default router;
//# sourceMappingURL=public.js.map