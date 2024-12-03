import express from 'express';

const router = express.Router();

router.get('/comp', (req, res) => {
    return res.status(200).json({dada: "dada"});
});

export default router;