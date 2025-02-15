import pool from './dbMain.js';


async function checkCpuAndMoboSocketComp(cpuId, moboId) {
    const [cpuSocket] = await pool.query("select socket from cpu where id = ?", [cpuId]);
    const [moboSocket] = await pool.query("select socket from mobo where id = ?", [moboId]);
    return cpuSocket[0].socket === moboSocket[0].socket;
}




export {
    checkCpuAndMoboSocketComp
};