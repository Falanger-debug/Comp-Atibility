import {getCPU, getCPUs, getGPUs, getMotherboards, getRam, getStorages, getPowerSupplies} from '../models/db.js';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const brandsLogos = await import(`file://${path.join(__dirname, '../data/brandsLogos.json')}`, {
    assert: {type: 'json'}
}).then(module => module.default);


console.log(getCPU());

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

export const renderCPUs = async (req, res) => {
    try {
        const cpus = await getCPUs();
        res.render('products/cpu', {cpus, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving CPUs from database');
    }
}

export const renderGPU = async (req, res) => {
    try {
        const gpus = await getGPUs();
        res.render('products/gpu', {gpus, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving GPUs from database');
    }
}

export const renderMobo = async (req, res) => {
    try {
        const motherboards = await getMotherboards();
        res.render('products/motherboard', {motherboards, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving motherboards from database');
    }
}

export const renderRam = async (req, res) => {
    try {
        const rams = await getRam();
        res.render('products/ram', {rams, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving RAM from database');
    }
}

export const renderStorages = async (req, res) => {
    try {
        const storages = await getStorages();
        res.render('products/storage', {storages, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving storage from database');
    }
}

export const renderPowerSupplies = async (req, res) => {
    try {
        const powerSupplies = await getPowerSupplies();
        res.render('products/power-supply', {powerSupplies, brandsLogos});
    } catch (error) {
        res.status(500).send('Error retrieving power supplies from database');
    }
}

export {
    renderMainPage, renderComp, renderBuild, renderProducts
};