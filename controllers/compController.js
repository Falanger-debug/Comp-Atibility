import {
    checkCpuAndMoboSocketComp, getCompCaseFormFactor, getMoboFormFactor
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

const checkMoboAndCompCaseFormFactorComp = async(req, res) => {
    const {moboId, compCaseId} = req.query;
    let moboFormFactor;
    let compCaseFormFactor;

    try {
        moboFormFactor = await getMoboFormFactor(moboId);
    } catch (error) {
        console.error("Error while loading moboFormFactor", error);
        res.status(500).send('Error retrieving moboFormFactor from database');
    }

    try {
        compCaseFormFactor = await getCompCaseFormFactor(compCaseId);
    } catch (error) {
        console.error("Error while loading compCaseFormFactor", error);
        res.status(500).send('Error retrieving compCaseFormFactor from database');
    }

    const sizeLegend = {
        "EATX": 4,
        "ATX": 3,
        "Micro-ATX": 2,
        "Mini-ITX": 1
    }
    res.json({isFormFactorComp: sizeLegend[moboFormFactor] <= sizeLegend[compCaseFormFactor]});
}


export {
    checkCpuAndMoboCompApi,
    checkMoboAndCompCaseFormFactorComp
};