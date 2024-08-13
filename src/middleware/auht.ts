import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

const JWT_SECRET = process.env.JWT_SECRET;

function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET!);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      // El token no es válido (por ejemplo, ha sido manipulado)
      throw new Error("Token inválido");
    } else if (error instanceof jwt.TokenExpiredError) {
      // El token ha expirado
      throw new Error("Token expirado");
    } else {
      // Otro tipo de error ocurrido durante la verificación del token
      throw new Error("Error al verificar el token");
    }
  }
}

//midlawere
function authMiddleware(req:any, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    // Verifica el token y adjunta los datos del usuario a la solicitud
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
}

export { authMiddleware };
