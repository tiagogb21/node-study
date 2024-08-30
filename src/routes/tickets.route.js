import { Router } from "express";
import { TicketController } from "../controller/tickets.controller.js";

const router = Router();
const ticketController = new TicketController();

router.get("/", async (req, res) => await ticketController.get(req, res));

router.post("/", async (req, res) => await ticketController.post(req, res));

export default router;
