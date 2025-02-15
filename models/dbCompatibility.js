import pool from './dbMain.js';


async function checkCpuAndMoboSocketComp(cpuId, moboId) {
    const [cpuSocket] = await pool.query("select socket from cpu where id = ?", [cpuId]);
    const [moboSocket] = await pool.query("select socket from mobo where id = ?", [moboId]);
    return cpuSocket[0].socket === moboSocket[0].socket;
}

async function getMoboFormFactor(moboId) {
    const [formFactor] = await pool.query("select form_factor from mobo where id = ?", [moboId]);
    return formFactor[0].form_factor;
}

async function getCompCaseFormFactor(compCaseId) {
    const [formFactor] = await pool.query("select form_factor from comp_case where id = ?", [compCaseId]);
    return formFactor[0].form_factor;
}

async function getRamCapacity(ramId) {
    const [ramCapacity] = await pool.query("select capacity from ram where id = ?", [ramId]);
    return ramCapacity[0].capacity;
}

async function getMoboMaxMemory(ramId) {
    const [maxMemory] = await pool.query("select max_memory from mobo where id = ?", [ramId]);
    return maxMemory[0].max_memory;
}

async function getMoboMemorySlots(ramId) {
    const [memorySlots] = await pool.query("select memory_slots from mobo where id = ?", [ramId]);
    return memorySlots[0].memory_slots;
}

async function getRamSticksNumber(ramId) {
    const [ramSticks] = await pool.query("select num_sticks from ram where id = ?", [ramId]);
    return ramSticks[0].num_sticks;
}

async function getMoboRamType(moboId) {
    const [ramType] = await pool.query("select memory_type from mobo where id = ?", [moboId]);
    return ramType[0].memory_type;
}

async function getRamType(ramId) {
    const [ramType] = await pool.query("select type from ram where id = ?", [ramId]);
    return ramType[0].type;
}

export {
    checkCpuAndMoboSocketComp,
    getMoboFormFactor,
    getCompCaseFormFactor,
    getRamCapacity,
    getMoboMaxMemory,
    getMoboMemorySlots,
    getRamSticksNumber,
    getMoboRamType,
    getRamType
};