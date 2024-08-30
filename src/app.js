// src/app.js
import express from 'express';
import ticketRouter from './routes/tickets.route.js';

export const app = express();
const port = 3333;

app.use(express.json());

app.use('/tickets', ticketRouter);
