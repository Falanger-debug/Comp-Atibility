import express from 'express';

const router = express.Router();

router.get('/comp', (req, res) => {
    return res.render('comp.ejs');
});

export default router;