import express from 'express';

import {
    checkCpuAndMoboCompApi, checkCpuCoolerAndCaseComp, checkMoboAndCompCaseFormFactorComp, checkMoboAndRamComp
} from "../controllers/compController.js";


const router = express.Router();

router.get('/api/checkCpuAndMoboComp', checkCpuAndMoboCompApi);
router.get('/api/checkMoboAndCompCaseFormFactorComp', checkMoboAndCompCaseFormFactorComp);
router.get('/api/checkMoboAndRamComp', checkMoboAndRamComp);
router.get('/api/checkCpuCoolerAndCaseComp', checkCpuCoolerAndCaseComp);

export default router;