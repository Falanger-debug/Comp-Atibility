import Pool from 'pg';

const Pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_USERNAME,
    port: process.env.DB_PORT,
});

module.exports = Pool;
