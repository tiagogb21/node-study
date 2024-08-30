import { TicketModel } from "../model/tickets.model.js";

export class TicketController {
    constructor() {
        this.ticketModel = new TicketModel();
    }

    async get(req, res) {
        try {
            const tickets = await this.ticketModel.list();
            res.json(tickets);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async post(req, res) {
        const { name } = req.body;
        try {
            const result = await this.ticketModel.create({ name });
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
