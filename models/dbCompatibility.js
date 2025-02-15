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


export {
    checkCpuAndMoboSocketComp,
    getMoboFormFactor,
    getCompCaseFormFactor
};