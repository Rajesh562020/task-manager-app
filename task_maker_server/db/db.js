require("dotenv").config();
const { Pool } = require("pg");

// PostgreSQL connection pool
const pool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
});

// Export the connection pool
module.exports = pool;
