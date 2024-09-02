import bcrypt from "bcrypt";

export class BcryptUtils {
    saltRounds = 10;

    async hashPassword(password) {
        return await bcrypt.hash(password, this.saltRounds);
    }

    // Método para comparar senha fornecida com o hash armazenado
    async comparePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
}
