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

async function getRams() {
    const [rows] = await pool.query("SELECT * FROM ram");
    return rows;
}

async function getStorages() {
    const [rows] = await pool.query("SELECT * FROM storage");
    return rows;
}

async function getPowerSupplies() {
    const [rows] = await pool.query("SELECT * FROM power_supply");
    return rows;
}

async function getCompCases() {
    const [rows] = await pool.query("SELECT * FROM comp_case");
    return rows;
}

async function getCpuCoolers() {
    const [rows] = await pool.query("SELECT * FROM cpu_cooler");
    return rows;
}

async function getResults(query_string) {
    {
        const searchTerm = `%${query_string}%`;
        const sql = `
        SELECT brand, model FROM comp_case WHERE brand LIKE ? OR model LIKE ?
        UNION
        SELECT brand, model FROM cpu WHERE brand LIKE ? OR model LIKE ?
        UNION
        SELECT brand, model FROM cpu_cooler WHERE brand LIKE ? OR model LIKE ?
        UNION
        SELECT brand, model FROM gpu WHERE brand LIKE ? OR model LIKE ?
        UNION
        SELECT brand, model FROM mobo WHERE brand LIKE ? OR model LIKE ?
        UNION
        SELECT brand, model FROM power_supply WHERE brand LIKE ? OR model LIKE ?
        UNION
        SELECT brand, model FROM ram WHERE brand LIKE ? OR model LIKE ?
        UNION
        SELECT brand, model FROM storage WHERE brand LIKE ? OR model LIKE ?;
    `;
        console.log("Executing SQL query with:", searchTerm);
        const [rows] = await pool.query(sql, Array(16).fill(searchTerm));
        return rows;
    }
}
export {
    getCPUs,
    getCPU,
    getGPUs,
    getGPU,
    getMotherboards,
    getRams,
    getStorages,
    getPowerSupplies,
    getCompCases,
    getCpuCoolers,
    getResults
};