import {
    getCPUs,
    getGPUs,
    getMotherboards,
    getRams,
    getStorages,
    getPowerSupplies,
    getCompCases,
    getCpuCoolers,
    getResults,
    getWattageByIdAndComponent
} from '../models/db.js';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const brandsLogos = await import(`file://${path.join(__dirname, '../data/brandsLogos.json')}`, {
    assert: {type: 'json'}
}).then(module => module.default);


const renderMainPage = (req, res) => {
    res.render('main');
};

const renderComp = (req, res) => {
    res.render('comp');
}

const renderBuild = (req, res) => {
    res.render('build');
}

const renderProducts = (req, res) => {
    res.render('products');
}

const renderCPUs = async (req, res) => {
    try {
        const cpus = await getCPUs();
        res.render('products/cpu', {cpus, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving CPUs from database');
    }
}

const renderGPU = async (req, res) => {
    try {
        const gpus = await getGPUs();
        res.render('products/gpu', {gpus, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving GPUs from database');
    }
}

const renderMobo = async (req, res) => {
    try {
        const motherboards = await getMotherboards();
        res.render('products/motherboard', {motherboards, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving motherboards from database');
    }
}

const renderRam = async (req, res) => {
    try {
        const rams = await getRams();
        res.render('products/ram', {rams, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving RAM from database');
    }
}

const renderStorages = async (req, res) => {
    try {
        const storages = await getStorages();
        res.render('products/storage', {storages, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving storage from database');
    }
}

const renderPowerSupplies = async (req, res) => {
    try {
        const powerSupplies = await getPowerSupplies();
        res.render('products/power-supply', {powerSupplies, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving power supplies from database');
    }
}

const renderCompCases = async (req, res) => {
    try {
        const comp_cases = await getCompCases();
        res.render('products/case', {comp_cases, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving cases from database');
    }
}

const renderCpuCoolers = async (req, res) => {
    try {
        const cpuCoolers = await getCpuCoolers();
        res.render('products/cpu-cooler', {cpuCoolers, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving CPU coolers from database');
    }
}


const renderSearchResults = async (req, res) => {
    const query_string = req.query.q;
    if (!query_string) {
        res.status(400).send('No search query provided');
        return;
    }
    try {
        const results = await getResults(query_string);
        res.render('searchResults', {results, brandsLogos});
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).send('Error retrieving search results from database');
    }
}


const getWattageApi = async (req, res) => {
    const {wattageOrTdp, id, component} = req.query;
    try {
        const wattage = await getWattageByIdAndComponent(wattageOrTdp, id, component);
        console.log(`Returned wattage or tdp for component ${component}:`, wattage);
        res.json({wattage});
    } catch (error) {
        console.error("Error while loading wattage", error);
        res.status(500).send('Error retrieving wattage from database');
    }
}

export {
    renderMainPage,
    renderComp,
    renderBuild,
    renderProducts,
    renderGPU,
    renderCompCases,
    renderCPUs,
    renderCpuCoolers,
    renderMobo,
    renderPowerSupplies,
    renderRam,
    renderStorages,
    renderSearchResults,
    getWattageApi
};