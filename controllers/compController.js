import {
    checkCpuAndMoboSocketComp,
    getCompCaseFormFactor,
    getMoboFormFactor,
    getMoboMaxMemory,
    getMoboMemorySlots,
    getRamCapacity, getRamSticksNumber
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

const checkMoboAndRamComp = async(req, res) => {
    const {moboId, ramId} = req.query;
    let moboMaxMemory;
    let moboMemorySlots;
    let ramCapacity;
    let ramSticks;

    try {
        moboMaxMemory = await getMoboMaxMemory(moboId);
    } catch (error) {
        console.error("Error while loading moboMaxMemory", error);
        res.status(500).send('Error retrieving moboMaxMemory from database');
    }

    try {
        moboMemorySlots = await getMoboMemorySlots(moboId);
    } catch (error) {
        console.error("Error while loading moboMemorySlots", error);
        res.status(500).send('Error retrieving moboMemorySlots from database');
    }

    try {
        ramCapacity = await getRamCapacity(ramId);
    } catch (error) {
        console.error("Error while loading ramCapacity", error);
        res.status(500).send('Error retrieving ramCapacity from database');
    }

    try {
        ramSticks = await getRamSticksNumber(ramId);
    } catch (error) {
        console.error("Error while loading ramSticks", error);
        res.status(500).send('Error retrieving ramSticks from database');
    }

    if ((moboMaxMemory < ramCapacity) || (moboMemorySlots < ramSticks)) {
        res.json({isRamComp: false});
    } else {
        res.json({isRamComp: true});
    }
}


export {
    checkCpuAndMoboCompApi,
    checkMoboAndCompCaseFormFactorComp,
    checkMoboAndRamComp
};