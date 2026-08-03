import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { authOutputDTO } from "./interface/auth.dto";
import { UserRole } from "../../common/enums/user.table.enum";
import { forgotPasswordAuthDto } from "./interface/forgot-password.dto";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_SECRET_REFRESH = process.env.JWT_SECRET_REFRESH as string;

export class Middlewares {
  async auth(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const token = req.headers.authorization; // pegando o token
      if (!token) return res.status(401).json({ message: "Acesso negado" });

      const decoded = jwt.verify(
        token.replace("Bearer ", ""),
        JWT_SECRET,
      ) as authOutputDTO;

      if (!decoded) {
        throw new Error("O token não pôde ser decodificado");
      }

      req.userId = String(decoded.userId);
      req.userEmail = String(decoded.userEmail);
      req.userRole = decoded.userRole as UserRole;

      next(); //next é a permissão de continuar após o middleware
    } catch (error) {
      return res.status(401).json({ message: "Erro no servidor: ", error });
    }
  }

  async forgotPassword(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const token = req.headers.authorization; // pegando o token
      if (!token) return res.status(401).json({ message: "Acesso negado" });

      const decoded = jwt.verify(
        token.replace("Bearer ", ""),
        JWT_SECRET_REFRESH,
      ) as forgotPasswordAuthDto;

      req.userId = String(decoded.userId);

      next(); //next é a permissão de continuar após o middleware
    } catch (error) {
      return res.status(401).json({ message: "Erro no servidor", error });
    }
  }
}
