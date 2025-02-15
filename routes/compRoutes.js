import express from 'express';

import {
    checkCpuAndMoboCompApi
} from "../controllers/compController.js";


const router = express.Router();

router.get('/api/checkCpuAndMoboComp', checkCpuAndMoboCompApi);

export default router;