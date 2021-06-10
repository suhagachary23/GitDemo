const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/user');
const express = require('express');
const { response } = require('express');
const router = express.Router();

var otp = Math.random()
otp = otp * 100000
otp = parseInt(otp)
Unique_Code = Math.random()
Unique_Code = Unique_Code * 10021123
Unique_Code = parseInt(Unique_Code)


router.post('/', async (req, res) => {
  
    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('This user is already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: req.body.password,
            Unique_Code,
            Verified: false,
            confirmpassword: req.body.confirmpassword
        });
        // user = new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'phonenumber', 'password', 'confirmpassword']));
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