"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const student_router_1 = __importDefault(require("./routers/student.router"));
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/students", student_router_1.default);
// Simple route to test connection
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT NOW()');
        res.json({ time: result.rows[0] });
    }
    catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
}));
// // Example: Get all actors
// app.get('/actors', async (req: Request, res: Response) => {
//     try {
//         const result = await pool.query('SELECT * FROM actor');
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });
// // Example: Add a actor
// app.post('/actors', async (req: Request, res: Response) => {
//     const { first_name, last_name } = req.body;
//     try {
//         const result = await pool.query(
//             'INSERT INTO actor (first_name, last_name) VALUES ($1, $2) RETURNING *',
//             [first_name, last_name]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         res.status(500).json({ error: 'Database error' });
//     }
// });
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
