import {
    checkCpuAndMoboSocketComp
} from "../models/dbCompatibility.js";

const checkCpuAndMoboCompApi = async (req, res) => {
    const {cpuId, moboId} = req.query;
    try {
        const isSocketComp = await checkCpuAndMoboSocketComp(cpuId, moboId);
        res.json({isSocketComp});
    } catch (error) {
        console.error("Error while loading isSocketComp", error);
        res.status(500).send('Error retrieving isSocketComp from database');
    }
}


export {
    checkCpuAndMoboCompApi
};