import express from 'express';

import {
    renderCPUs
} from '../controllers/mainController.js';


const router = express.Router();

router.get('/cpu', renderCPUs);

export default router;