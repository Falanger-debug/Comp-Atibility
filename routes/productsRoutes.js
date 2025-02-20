import express from 'express';

import {
    renderCPUs, renderGPU, renderMobo, renderRam, renderStorages, renderPowerSupplies, renderCompCases, renderCpuCoolers
} from '../controllers/mainController.js';


const router = express.Router();

router.get('/cpu', renderCPUs);
router.get('/gpu', renderGPU);
router.get('/motherboard', renderMobo);
router.get('/ram', renderRam);
router.get('/storage', renderStorages)
router.get('/power-supply', renderPowerSupplies);
router.get('/case', renderCompCases);
router.get('/cpu-cooler', renderCpuCoolers);
export default router;