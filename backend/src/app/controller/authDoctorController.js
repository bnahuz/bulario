const express = require('express');

const Doctor = require('../models/Doctor');

const router = express.Router();

router.post('/register', async(req, res) => {
    const { email } = req.body;

    try {
        if(await Doctor.findOne({ email }))
            return res.status(400).send({ error: 'Doctor already exists' })

        const doctor = await Doctor.create(req.body);

        doctor.password = undefined;

        return res.send({ doctor });
    } catch(err) {
        return res.status(400).send({ error: 'Registration failed' })
    }
});

module.exports = app => app.use('/authDoctor', router);