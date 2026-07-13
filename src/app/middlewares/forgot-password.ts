import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { forgotPasswordAuthDto } from "./interface/forgot-password.dto";

const JWT_SECRET_REFRESH = process.env.JWT_SECRET_REFRESH as string;

const authForgotPassword = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization; // pegando o token
    if (!token) return res.status(401).json({ message: "Acesso negado" });

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      JWT_SECRET_REFRESH,
    ) as forgotPasswordAuthDto;

    req.userEmail = String(decoded.email);

    next(); //next é a permissão de continuar após o middleware
  } catch (error) {
    return res.status(401).json({ message: "Erro no servidor" });
  }
};

export default authForgotPassword;
