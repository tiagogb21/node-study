import { InvalidCredentialsError } from "../../error/InvalidCredentials";
import { InvalidOrExpiredToken } from "../../error/UserNotFoundError";
import { JWTUtils } from "../../utils/JWTUtils";
import { BcryptUtils } from "../../utils/BCryptUtils";

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.bcryptUtils = new BcryptUtils();
        this.jWTUtils = new JWTUtils();
    }

    async create({ data }) {
        const {name, email} = data;
        return this.userRepository.create(name, email);
    }

    getUser(id) {
        return this.userRepository.getUser(id);
    }

    async authenticateUser(email, password, userRepository) {
        const user = await userRepository.getUserByEmail(email);

        if (!user) {
            throw new InvalidOrExpiredToken;
        }

        const isPasswordValid = await this.bcryptUtils.comparePassword(password, user.password);

        if (!isPasswordValid) {
            throw new InvalidCredentialsError;
        }

        // Gera o token JWT para o usuário autenticado
        const token = this.jWTUtils.generateToken({ id: user.id, email: user.email });

        return { token };
    }
}

export default UserService;
