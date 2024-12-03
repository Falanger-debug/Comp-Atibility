import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('products.ejs');
});

export default router;