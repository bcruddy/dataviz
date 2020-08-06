import express from 'express';

import timeseriesFixture from './timeseries.fixture.js';

const router = express.Router();

router.get('/ping', (req, res) => {
    res.json('alive');
});

router.get('/fake', (req, res) => {
    res.json(timeseriesFixture);
});

export default router;
