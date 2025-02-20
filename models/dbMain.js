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

async function getGPUs() {
    const [rows] = await pool.query("SELECT * FROM GPU");
    return rows;
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
        const searchTerm = query_string.split(/\s+/).map(word => `%${word}%`);

        const queries = {
            comp_case: "SELECT brand, model, form_factor FROM comp_case WHERE brand LIKE ? OR model LIKE ?",
            cpu: "SELECT brand, model, socket, cores, threads, base_clock, boost_clock, tdp FROM cpu WHERE brand LIKE ? OR model LIKE ?",
            cpu_cooler: "SELECT brand, model, cooling_type, cooler_dimensions, tdp FROM cpu_cooler WHERE brand LIKE ? OR model LIKE ?",
            gpu: "SELECT brand, model, vram, interface, tdp FROM gpu WHERE brand LIKE ? OR model LIKE ?",
            mobo: "SELECT brand, model, socket, chipset, form_factor, max_memory, memory_slots FROM mobo WHERE brand LIKE ? OR model LIKE ?",
            power_supply: "SELECT brand, model, wattage, efficiency_rating FROM power_supply WHERE brand LIKE ? OR model LIKE ?",
            ram: "SELECT brand, model, type, capacity, speed FROM ram WHERE brand LIKE ? OR model LIKE ?",
            storage: "SELECT brand, model, type, capacity FROM storage WHERE brand LIKE ? OR model LIKE ?"
        };


        let results = {};

        console.log("Executing SQL query with:", searchTerm);

        for (const [category, sql] of Object.entries(queries)) {
            let categoryResults = new Set();

            for (const term of searchTerm) {
                const [rows] = await pool.query(sql, [term, term]);
                rows.forEach(row => categoryResults.add(JSON.stringify(row)));
            }
            results[category] = Array.from(categoryResults).map(row => JSON.parse(row));
        }

        return results;
}

async function getWattageByIdAndComponent(wattageOrTdp, id, component) {
    const query = `SELECT ?? FROM ?? WHERE id = ?`;
    const [rows] = await pool.query(query, [wattageOrTdp, component, id]);
    return rows[0] ? rows[0][wattageOrTdp] : 0;
}

async function getGpuRecommendedPower(gpuId) {
    const [recommendedPower] = await pool.query("select recommended_psu from gpu where id = ?", [gpuId]);
    return recommendedPower[0].recommended_psu;
}

export {
    getCPUs,
    getGPUs,
    getMotherboards,
    getRams,
    getStorages,
    getPowerSupplies,
    getCompCases,
    getCpuCoolers,
    getResults,
    getWattageByIdAndComponent,
    getGpuRecommendedPower
};

export default pool;