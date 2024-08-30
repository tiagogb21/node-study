import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function setupDatabase() {
    const db = await open({
        filename: path.resolve(__dirname, '../database.db'),
        driver: sqlite3.Database,
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS tickets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        );
    `);

    console.log("Tabela 'tickets' criada com sucesso.");
    await db.close();
}

setupDatabase().catch(err => {
    console.error('Erro ao configurar o banco de dados:', err);
});