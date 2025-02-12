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

async function getMotherboards() {
    const [rows] = await pool.query("SELECT * FROM mobo");
    return rows;
}

async function getRam() {
    const [rows] = await pool.query("SELECT * FROM ram");
    return rows;
}

async function getStorages(){
    const [rows] = await pool.query("SELECT * FROM storage");
    return rows;
}

async function getPowerSupplies() {
    const [rows] = await pool.query("SELECT * FROM power_supply");
    return rows;
}

async function getCompCases(){
    const [rows] = await pool.query("SELECT * FROM comp_case");
    return rows;
}

async function getCpuCoolers(){
    const [rows] = await pool.query("SELECT * FROM cpu_cooler");
    return rows;
}

export {
    getCPUs,
    getCPU,
    getGPUs,
    getGPU,
    getMotherboards,
    getRam,
    getStorages,
    getPowerSupplies,
    getCompCases,
    getCpuCoolers
};