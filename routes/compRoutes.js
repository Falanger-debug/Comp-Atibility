import express from 'express';

import {
    checkCpuAndMoboCompApi,
    checkCpuCoolerAndCaseComp,
    checkGpuAndPowerSupplyComp,
    checkMoboAndCompCaseFormFactorComp,
    checkMoboAndRamComp
} from "../controllers/compController.js";


const router = express.Router();

router.get('/api/checkCpuAndMoboComp', checkCpuAndMoboCompApi);
router.get('/api/checkMoboAndCompCaseFormFactorComp', checkMoboAndCompCaseFormFactorComp);
router.get('/api/checkMoboAndRamComp', checkMoboAndRamComp);
router.get('/api/checkCpuCoolerAndCaseComp', checkCpuCoolerAndCaseComp);
router.get('/api/checkGpuAndPowerSupplyComp', checkGpuAndPowerSupplyComp);

export default router;