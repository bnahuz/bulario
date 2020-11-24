const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.get('/users', async(req, res) => {

    try {

        const users = await User.find();

        return res.send(users);
        
    } catch(err) {
        return res.status(400).send({ error: "Can't get users" })
    }
});

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
        
        //const doctor = doctorEmail
        const user = await User.findOne({ "email": email });
        const userID = user._id;
        
        await User.update(
            {_id: userID},
            {
                $addToSet: {
                doctorsIDS: doctorEmail
                }
            }
        );
        
        return res.send({ user });

    } catch(err) {
        return res.status(400).send({ error: 'Add Doctor failed' })
    }
});

module.exports = app => app.use('/authUser', router);