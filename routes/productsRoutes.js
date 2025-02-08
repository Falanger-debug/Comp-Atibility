import express from 'express';

import {
    renderCPUs, renderGPU, renderMobo, renderRam
} from '../controllers/mainController.js';


const router = express.Router();

router.get('/cpu', renderCPUs);
router.get('/gpu', renderGPU);
router.get('/motherboard', renderMobo);
router.get('/ram', renderRam);
export default router;