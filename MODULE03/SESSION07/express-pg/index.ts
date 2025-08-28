import express, { Request, Response } from 'express';
import pool from './config/db';

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Simple route to test connection
app.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ time: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Example: Get all actors
app.get('/actors', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM actor');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Example: Add a actor
app.post('/actors', async (req: Request, res: Response) => {
    const { first_name, last_name } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO actor (first_name, last_name) VALUES ($1, $2) RETURNING *',
            [first_name, last_name]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});