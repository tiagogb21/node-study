import { UserRepository } from "../user/repositories/User.repository";
import UserService from "../user/services/User.service";

const userRepository = new UserRepository();
export const userService = new UserService(userRepository);
