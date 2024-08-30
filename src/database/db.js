import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Substituição do __filename e __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function initializeDb() {
    const db = await open({
        filename: path.resolve(__dirname, "../../database.db"),
        driver: sqlite3.Database,
    });
    return db;
}

const dbPromise = initializeDb();

export default dbPromise;
