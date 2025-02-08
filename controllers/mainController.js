import {getCPU, getCPUs, getGPUs, getMotherboards, getRam, getStorages} from '../models/db.js';

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

export const renderCPUs = async(req, res) => {
    try {
        const cpus = await getCPUs();
        res.render('products/cpu', {cpus});
    } catch (error) {
        res.status(500).send('Error retrieving CPUs from database');
    }
}

export const renderGPU = async(req, res) => {
    try {
        const gpus = await getGPUs();
        res.render('products/gpu', {gpus});
    } catch (error) {
        res.status(500).send('Error retrieving GPUs from database');
    }
}

export const renderMobo = async (req, res) => {
    try {
        const motherboards = await getMotherboards();
        res.render('products/motherboard', {motherboards});
    } catch (error) {
        res.status(500).send('Error retrieving motherboards from database');
    }
}

export const renderRam = async (req, res) => {
    try {
        const rams = await getRam();
        res.render('products/ram', {rams});
    } catch (error) {
        res.status(500).send('Error retrieving RAM from database');
    }
}

export const renderStorages = async (req, res) => {
    try {
        const storages = await getStorages();
        res.render('products/storage', {storages});
    } catch (error) {
        res.status(500).send('Error retrieving storage from database');
    }
}

export {
    renderMainPage,
    renderComp,
    renderBuild,
    renderProducts
};