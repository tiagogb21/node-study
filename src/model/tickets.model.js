import dbPromise from "../database/db.js";

export class TicketModel {
    constructor() {
        dbPromise.then((db) => {
            this.db = db;
        }).catch(err => {
            console.error('Erro ao conectar ao banco de dados:', err);
        });
    }

    async list() {
        const query = `SELECT * FROM tickets`;
        try {
            return await this.db.all(query, []);
        } catch (err) {
            throw new Error(`Erro ao listar tickets: ${err.message}`)
        }
    }

    async create(data) {
        const { name } = data;
        const query = `INSERT INTO tickets(name) VALUES(?)`
        try {
            const result = await this.db.run(query, [name]);
            return { id: result.lastID };
        } catch (err) {
            throw new Error(`Erro ao listar tickets: ${err.message}`)
        }
    }
}
