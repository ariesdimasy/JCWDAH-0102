import { Pool } from 'pg';

// PostgreSQL connection setup
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '999999',
    port: 5432,
});

export default pool