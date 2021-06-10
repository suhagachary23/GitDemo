const bcrypt = require('bcrypt');
const _ = require('lodash');
const users = require('../models/schemauser');
const express = require('express');
const { response } = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
   
    // Check if this user already exisits
    let user = await users.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('This user is already exisits!');
    } else {
        user = new users(_.pick(req.body, ['firstname', 'lastname', 'email', 'phonenumber', 'password', 'confirmpassword', 'role']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(user);
        //res.send(_.pick(user, ['_id', 'firstname', 'lastname','email','phonenumber']));
    }
});


router.get('/', async (req, res) => {
    const body = await User.find()
    res.send(body)

});

module.exports = router;