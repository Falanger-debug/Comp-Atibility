import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('products.ejs');
});

router.get('/cpu', (req, res) => {
    return res.render('products/cpu.ejs');
});

router.get('/cpu-cooler', (req, res) => {
    return res.render('products/cpu-cooler.ejs');
});

router.get('/motherboard', (req, res) => {
    return res.render('products/motherboard.ejs');
});

router.get('/memory', (req, res) => {
    return res.render('products/memory.ejs');
});

router.get('/storage', (req, res) => {
    return res.render('products/storage.ejs');
});

router.get('/case', (req, res) => {
    return res.render('products/case.ejs');
});

router.get('/power-supply', (req, res) => {
    return res.render('products/power-supply.ejs');
});

router.get('/video-card', (req, res) => {
    return res.render('products/video-card.ejs');
});


export default router;