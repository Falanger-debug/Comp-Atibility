import mysql from 'mysql2';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();


async function getCPUs() {
    const [rows] = await pool.query("SELECT * FROM CPU");
    return rows;
}

async function getCPU(id) {
    const [rows] = await pool.query("SELECT * FROM CPU WHERE id = ?", [id]);
    return rows[0];
}

async function getGPUs() {
    const [rows] = await pool.query("SELECT * FROM GPU");
    return rows;
}

async function getGPU(id) {
    const [rows] = await pool.query("SELECT * FROM GPU WHERE id = ?", [id]);
    return rows[0];
}


export {
    getCPUs,
    getCPU,
    getGPUs,
    getGPU
};