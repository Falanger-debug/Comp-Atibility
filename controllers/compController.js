import {
    checkCpuAndMoboSocketComp,
    getChipsetSpeed,
    getCompCaseFormFactor,
    getMoboChipset,
    getMoboFormFactor,
    getMoboMaxMemory,
    getMoboMemorySlots,
    getMoboRamType,
    getRamCapacity,
    getRamSpeed,
    getRamSticksNumber,
    getRamType
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

const checkMoboAndCompCaseFormFactorComp = async (req, res) => {
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
        "EATX": 4, "ATX": 3, "Micro-ATX": 2, "Mini-ITX": 1
    }
    res.json({isFormFactorComp: sizeLegend[moboFormFactor] <= sizeLegend[compCaseFormFactor]});
}

const checkMoboAndRamComp = async (req, res) => {
    const {moboId, ramId} = req.query;
    let moboMaxMemory;
    let moboMemorySlots;
    let moboRamType;
    let moboChipset;
    let moboChipsetSpeed;
    let ramCapacity;
    let ramSticks;
    let ramType;
    let ramSpeed;

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

    try {
        moboRamType = await getMoboRamType(moboId);
    } catch (error) {
        console.error("Error while loading moboRamType", error);
        res.status(500).send('Error retrieving moboRamType from database');
    }

    try {
        ramType = await getRamType(ramId);
    } catch (error) {
        console.error("Error while loading ramType", error);
        res.status(500).send('Error retrieving ramType from database');
    }

    try {
        moboChipset = await getMoboChipset(moboId);
    } catch (error) {
        console.error("Error while loading moboChipset", error);
        res.status(500).send('Error retrieving moboChipset from database');
    }

    try {
        moboChipsetSpeed = await getChipsetSpeed(moboChipset);
    } catch (error) {
        console.error("Error while loading moboChipsetSpeed", error);
        res.status(500).send('Error retrieving moboChipsetSpeed from database');
    }

    try {
        ramSpeed = await getRamSpeed(ramId);
    } catch (error) {
        console.error("Error while loading ramSpeed", error);
        res.status(500).send('Error retrieving ramSpeed from database');
    }

    console.log("moboChipsetSpeed: ", moboChipsetSpeed);
    console.log("ramSpeed: ", ramSpeed);
    console.log("moboMaxMemory: ", moboMaxMemory);
    console.log("ramCapacity: ", ramCapacity);
    console.log("moboMemorySlots: ", moboMemorySlots);
    console.log("ramSticks: ", ramSticks);
    console.log("moboRamType: ", moboRamType);
    console.log("ramType: ", ramType);

    if ((moboMaxMemory < ramCapacity) || (moboMemorySlots < ramSticks) || (moboRamType !== ramType) ||
        (moboChipsetSpeed < ramSpeed)) {
        res.json({isRamComp: false});
    } else {
        res.json({isRamComp: true});
    }
}


export {
    checkCpuAndMoboCompApi, checkMoboAndCompCaseFormFactorComp, checkMoboAndRamComp
};