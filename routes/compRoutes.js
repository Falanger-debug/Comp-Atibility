import express from 'express';

import {
    checkCpuAndMoboCompApi,
    checkCpuCoolerAndCaseComp, checkGpuAndCaseComp, checkGpuAndMoboComp,
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
router.get('/api/checkGpuAndCaseComp', checkGpuAndCaseComp);
router.get('/api/checkGpuAndMoboComp', checkGpuAndMoboComp);

export default router;