import express from 'express';

import {
    checkCpuAndMoboCompApi, checkMoboAndCompCaseFormFactorComp, checkMoboAndRamComp
} from "../controllers/compController.js";


const router = express.Router();

router.get('/api/checkCpuAndMoboComp', checkCpuAndMoboCompApi);
router.get('/api/checkMoboAndCompCaseFormFactorComp', checkMoboAndCompCaseFormFactorComp);
router.get('/api/checkMoboAndRamComp', checkMoboAndRamComp);

export default router;