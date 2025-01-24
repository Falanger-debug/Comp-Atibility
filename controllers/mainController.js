import con from '../models/db.js';


const renderMainPage = (req, res) => {
    res.render('main');
};

export {renderMainPage};