import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { authOutputDTO } from "./interface/auth.dto";

const JWT_SECRET = process.env.JWT_SECRET as string;

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization; // pegando o token
    if (!token) return res.status(401).json({ message: "Acesso negado" });

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      JWT_SECRET,
    ) as authOutputDTO;

    req.userId = Number(decoded.id);

    next(); //next é a permissão de continuar após o middleware
  } catch (error) {
    return res.status(401).json({ message: "Erro no servidor" });
  }
};

export default auth;
