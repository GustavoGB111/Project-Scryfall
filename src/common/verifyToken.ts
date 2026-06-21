import { verify } from "jsonwebtoken";

const secret = process.env.JWT_SECRET!;

export function verifyToken(Token: string) {
  try {
    const payload = verify(Token, secret);
    return payload;
  } catch (error) {
    throw new Error("Token inválido ou expirado");
  }
}
