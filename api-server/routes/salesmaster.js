const express = require('express');
const { async } = require('rxjs');
const router = express.Router();
const salesmaster = require('../services/salesmaster');


/* Post customer. */
router.post('/', async function(req, res, next) {
    try {
        res.json(await salesmaster.createsalesmaster(req.body));
    } catch (err) {
        console.error(`Error while creating salesmaster`, err.message);
        next(err);
    }
});

module.exports = router;