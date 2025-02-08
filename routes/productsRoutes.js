import express from 'express';

import {
    renderCPUs, renderGPU
} from '../controllers/mainController.js';


const router = express.Router();

router.get('/cpu', renderCPUs);
router.get('/gpu', renderGPU);

export default router;