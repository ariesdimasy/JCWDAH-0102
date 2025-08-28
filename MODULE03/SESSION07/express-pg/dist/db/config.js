"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// PostgreSQL connection setup
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '999999',
    port: 5432,
});
exports.default = pool;
