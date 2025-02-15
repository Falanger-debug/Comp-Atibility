import express from 'express';

import {
    checkCpuAndMoboCompApi, checkMoboAndCompCaseFormFactorComp
} from "../controllers/compController.js";


const router = express.Router();

router.get('/api/checkCpuAndMoboComp', checkCpuAndMoboCompApi);
router.get('/api/checkMoboAndCompCaseFormFactorComp', checkMoboAndCompCaseFormFactorComp);

export default router;