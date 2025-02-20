import {
    checkCpuAndMoboSocketComp,
    getCaseGpuLength,
    getChipsetSpeed,
    getCompCaseFormFactor,
    getCoolerDimensions,
    getCoolerMaxHeight,
    getGpuInterface,
    getGpuLength,
    getGpuRecommendedPower,
    getMoboChipset,
    getMoboFormFactor,
    getMoboMaxMemory,
    getMoboMemorySlots,
    getMoboRamType,
    getMoboSlot, getMoboStorages,
    getPowerSupplyWattage,
    getRamCapacity,
    getRamSpeed,
    getRamSticksNumber,
    getRamType, getStorageType
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

    // console.log("moboChipsetSpeed: ", moboChipsetSpeed);
    // console.log("ramSpeed: ", ramSpeed);
    // console.log("moboMaxMemory: ", moboMaxMemory);
    // console.log("ramCapacity: ", ramCapacity);
    // console.log("moboMemorySlots: ", moboMemorySlots);
    // console.log("ramSticks: ", ramSticks);
    // console.log("moboRamType: ", moboRamType);
    // console.log("ramType: ", ramType);

    if ((moboMaxMemory < ramCapacity) || (moboMemorySlots < ramSticks) || (moboRamType !== ramType) ||
        (moboChipsetSpeed < ramSpeed)) {
        res.json({isRamComp: false});
    } else {
        res.json({isRamComp: true});
    }
}

const checkCpuCoolerAndCaseComp = async (req, res) => {
    const {cpuCoolerId, compCaseId} = req.query;
    let cpuCoolerDimensions;
    let coolerHeight;
    let caseMaxCpuCoolerHeight;

    try {
        const response = await getCoolerDimensions(cpuCoolerId);
        cpuCoolerDimensions = response.cooler_dimensions;
        if (cpuCoolerDimensions) {
            coolerHeight = cpuCoolerDimensions.split('x')[2];
        } else {
            coolerHeight = 0;
        }
    } catch (error) {
        console.error("Error while loading cpuCoolerDimensions", error);
        res.status(500).send('Error retrieving cpuCoolerDimensions from database');
    }

    try {
        caseMaxCpuCoolerHeight = await getCoolerMaxHeight(compCaseId);
    } catch (error) {
        console.error("Error while loading caseMaxCpuCoolerHeight", error);
        res.status(500).send('Error retrieving caseMaxCpuCoolerHeight from database');
    }

    // console.log("coolerHeight: ", coolerHeight);
    // console.log("caseMaxCpuCoolerHeight: ", caseMaxCpuCoolerHeight);

    res.json({isCpuCoolerComp: coolerHeight <= caseMaxCpuCoolerHeight});
}

const checkGpuAndPowerSupplyComp = async (req, res) => {
    const {gpuId, powerSupplyId} = req.query;
    let gpuPower;
    let powerSupplyPower;

    try {
        gpuPower = await getGpuRecommendedPower(gpuId);
    } catch (error) {
        console.error("Error while loading gpuPower", error);
    }

    try {
        powerSupplyPower = await getPowerSupplyWattage(powerSupplyId);
    } catch (error) {
        console.error("Error while loading powerSupplyPower", error);
    }

    if (gpuPower > powerSupplyPower) {
        res.json({isGpuPowerComp: false});
    } else {
        res.json({isGpuPowerComp: true});
    }
}

const checkGpuAndCaseComp = async (req, res) => {
    const {gpuId, caseId} = req.query;

    let gpuLength;
    let caseMaxGpuLength;

    try {
        gpuLength = await getGpuLength(gpuId);
    } catch (error) {
        console.error("Error while loading gpuLength", error);
        res.status(500).send('Error retrieving gpuLength from database');
    }

    try {
        caseMaxGpuLength = await getCaseGpuLength(caseId);
    } catch (error) {
        console.error("Error while loading caseMaxGpuLength", error);
        res.status(500).send('Error retrieving caseMaxGpuLength from database');
    }

    console.log("gpuLength: ", gpuLength);
    console.log("caseMaxGpuLength: ", caseMaxGpuLength);

    res.json({isGpuCaseComp: gpuLength <= caseMaxGpuLength});
}


const checkGpuAndMoboComp = async (req, res) => {
    const {gpuId, moboId} = req.query;

    let moboSlot;
    let gpuInterface;

    try {
        moboSlot = await getMoboSlot(moboId);
    } catch (error) {
        console.error("Error while loading moboSlot", error);
        res.status(500).send('Error retrieving moboSlot from database');
    }

    try {
        gpuInterface = await getGpuInterface(gpuId);
    } catch (error) {
        console.error("Error while loading gpuInterface", error);
        res.status(500).send('Error retrieving gpuInterface from database');
    }

    const gpuInterfaceMatch = gpuInterface.match(/PCIe (\d+\.\d+)/);
    const moboSlotMatch = moboSlot.match(/PCIe (\d+\.\d+)/);

    let gpuInterfaceType = gpuInterfaceMatch ? "PCIe" : null;
    let gpuInterfaceVersion = gpuInterfaceMatch ? parseFloat(gpuInterfaceMatch[1]) : NaN;

    let moboSlotType = moboSlotMatch ? "PCIe" : null;
    let moboSlotVersion = moboSlotMatch ? parseFloat(moboSlotMatch[1]) : NaN;


    console.log("gpuInterfaceType: ", gpuInterfaceType);
    console.log("gpuInterfaceVersion: ", gpuInterfaceVersion);

    console.log("moboSlotType: ", moboSlotType);
    console.log("moboSlotVersion: ", moboSlotVersion);

    if (moboSlotType === gpuInterfaceType && moboSlotVersion >= gpuInterfaceVersion) {
        res.json({isGpuMoboComp: true});
    } else {
        res.json({isGpuMoboComp: false});
    }
}

const checkStorageAndMoboComp = async (req, res) => {
    const {storageId, moboId} = req.query;

    let moboStorages;
    let storageType;

    try {
        moboStorages = await getMoboStorages(moboId);
    } catch (error) {
        console.error("Error while loading moboStorage", error);
        res.status(500).send('Error retrieving moboStorage from database');
    }

    try {
        storageType = await getStorageType(storageId);
    } catch (error) {
        console.error("Error while loading storageType", error);
        res.status(500).send('Error retrieving storageType from database');
    }

    console.log("moboStorages: ", moboStorages);
    console.log("storageType: ", storageType);

    for (let moboStorage of moboStorages) {
        if (moboStorage.interface === storageType) {
            res.json({isStorageMoboComp: true});
            return;
        }
        else if (moboStorage.interface === "SATA" && ((storageType === "SSD") || (storageType === "HDD"))) {
            res.json({isStorageMoboComp: true});
            return;
        }
        else if (moboStorage.interface === "NVMe" && (storageType === "SSD")) {
            res.json({isStorageMoboComp: true});
            return;
        }
    }
    res.json({isStorageMoboComp: false});
}

export {
    checkCpuAndMoboCompApi,
    checkMoboAndCompCaseFormFactorComp,
    checkMoboAndRamComp,
    checkCpuCoolerAndCaseComp,
    checkGpuAndPowerSupplyComp,
    checkGpuAndCaseComp,
    checkGpuAndMoboComp,
    checkStorageAndMoboComp
};