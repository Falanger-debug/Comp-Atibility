// import con from '../models/db.js';


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

export {
    renderMainPage,
    renderComp,
    renderBuild,
    renderProducts
};