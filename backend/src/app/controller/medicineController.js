const express = require('express');

const MedicineLeaflet = require('../models/Medicine');

const router = express.Router();


router.post('/registerMedicine', async(req, res) => {
    const { name } = req.body;

    try {
        if(await MedicineLeaflet.findOne({ name }))
            return res.status(400).send({ error: 'Medicine Leafleat already exists' })

        const medicine = await MedicineLeaflet.create(req.body);

        return res.send({ medicine });
    } catch(err) {
        return res.status(400).send({ error: 'Medicine leaflet registration failed' })
    }
});

module.exports = app => app.use('/medicine', router);