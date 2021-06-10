const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const User = require('../models/schemauser');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        console.log(req.body.email);
        console.log(user);
        if (!user) {
            return res.status(400).send('Incorrect email or password.');
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send('Incorrect email or password.');
        }

        console.log(user.role);

        if (user.role == 'admin') {
            res.send("Welcome Admin");
        } else {
            res.send("Welcome User");
        }

        res.send("Login Successfully Created!");

    } catch (error) {
        res.send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const body = await User.find()
        res.send(body)
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;