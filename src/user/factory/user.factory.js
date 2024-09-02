import { UserRepository } from "../repositories/User.repository";
import UserService from "../services/User.service";

const userRepository = new UserRepository();
export const userService = new UserService(userRepository);
