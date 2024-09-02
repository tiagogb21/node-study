import { Router } from "express";
import UserController from "./user.controller";
import { userService } from "./dependency";

const router = Router();

const userController = new UserController(userService);

router.post("/user", (req, res) => userController.register(req, res));
router.get("/user/:id", (req, res) => userController.getUser(req, res));

export default router;
