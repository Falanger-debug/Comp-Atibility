import express from 'express';

const router = express.Router();

router.get('/build', (req, res) => {
    return res.render('build.ejs');
});

export default router;