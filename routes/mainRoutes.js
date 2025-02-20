import express from 'express';
import path from 'path';

import {
    renderMainPage,
    renderComp,
    renderBuild,
    renderProducts,
    renderSearchResults,
    getWattageApi,
    checkIfGpuRecommendedPowerIs
} from '../controllers/mainController.js';
import {fileURLToPath} from "url";
import {getGpuRecommendedPower} from "../models/dbMain.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', renderMainPage);
router.get('/comp', renderComp);
router.get('/build', renderBuild);
router.get('/products', renderProducts);
router.get('/search', renderSearchResults);
router.get('/api/getWattage', getWattageApi);
router.get('/api/checkIfGpuHasEnoughPower', checkIfGpuRecommendedPowerIs);


router.get('/data/brandsLogos.json', (req, res) => {
    res.sendFile(path.join(__dirname, '../data', 'brandsLogos.json'));
});

export default router;