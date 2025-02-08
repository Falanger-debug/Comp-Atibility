import {getCPU, getCPUs, getGPUs} from '../models/db.js';

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

export {
    renderMainPage,
    renderComp,
    renderBuild,
    renderProducts
};