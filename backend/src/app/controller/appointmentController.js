const express = require('express');

const Appointment = require('../models/Appointment');

const router = express.Router();

router.post('/registerAppointment', async(req, res) => {

    try {

    const appointment = await Appointment.create(req.body);

    return res.send({ appointment });

    } catch(err) {
        return res.status(400).send({ error: 'Appointment registration failed' });
    }
});

module.exports = app => app.use('/appointment', router);