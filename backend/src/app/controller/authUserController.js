const express = require('express');

const User = require('../models/User');
const Doctor = require('../models/Doctor');

const router = express.Router();

router.post('/register', async(req, res) => {
    const { email } = req.body;

    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists' })

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user });
    } catch(err) {
        return res.status(400).send({ error: 'Registration failed' })
    }
});

router.patch('/addDoctor', async(req,res) => {
    const { email, doctorEmail } = req.body;

    try {
        const doctor = await Doctor.findOne({ doctorEmail })
        const doctorID = doctor.id
        const user = await User.findOne({ email })
        console.log(doctor)
        user.updateOne({
            $push: {
                "doctorID": doctorID
            }
        })


    } catch(err) {
        return res.status(400).send({ error: 'Add Doctor failed' })
    }
});

module.exports = app => app.use('/authUser', router);