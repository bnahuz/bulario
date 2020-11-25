const express = require('express');

const Prescription = require('../models/Prescription');
const Doctor = require('../models/Doctor');
const User = require('../models/User');


const router = express.Router();

router.post('/registerPrescription', async(req, res) => {
    // const { doctorEmail, pacientEmail } = req.body;

    try {

    const prescription = await Prescription.create(req.body);

    return res.send({ prescription });

    } catch(err) {
        return res.status(400).send({ error: 'Prescription registration failed' });
    }
});

module.exports = app => app.use('/prescription', router);