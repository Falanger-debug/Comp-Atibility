import express from 'express';

import {
    renderMainPage, renderComp, renderBuild, renderProducts, renderCPUs
} from '../controllers/mainController.js';


const router = express.Router();

router.get('/', renderMainPage);
router.get('/comp', renderComp);
router.get('/build', renderBuild);
router.get('/products', renderProducts);

export default router;