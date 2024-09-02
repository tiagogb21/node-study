import jwt from "jsonwebtoken";
import { InvalidOrExpiredToken } from "../error/InvalidOrExpiredToken";

export class JWTUtils {
    generateToken(payload) {
        return jwt.sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });
    }

    verifyToken(token) {
        try {
            // Verifica o token usando a chave secreta
            return jwt.verify(token, SECRET_KEY);
        } catch (error) {
            // Lida com erros de verificação, como token expirado ou inválido
            throw new InvalidOrExpiredToken();
        }
    }
}
