const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate } = require('../models/user');
const express = require('express');
const { response } = require('express');
// const routes = require('./addUser');
const routes = express.Router();
const nodemailer = require('nodemailer');

var otp = Math.random()
otp = otp * 100000
otp = parseInt(otp)

routes.post('/', async (req, res) => {

    const bdy = await User.find({ email: req.body.Email })
    // json(bdy)
    console.log("Response from database", bdy)

    console.log("User name from postman", req.body.Email)


    console.log("JSON To", bdy[0]['email'])
    if (bdy == '' || bdy[0]['email'] != req.body.Email) {
        res.send('Email Does not exist!!')
    }
    else {
        try {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'shravantestmail123@gmail.com',
                    pass: 'sandhya12345'
                }
            });


            var mailOptions = {

                from: 'shravantestmail123@gmail.com',
                to: bdy[0]['email'],
                subject: "Hello",
                text: `Your Unique code is:` + bdy[0]['Unique_Code'] + 'and your otp is: ' + otp



            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Email sent: ', info.response);
                    res.send('Email Sent!!!')

                }
            })


        }
        catch (error) {
            console.log(error)
        }
    }
})

routes.post('/verify', async (req, res) => {
    const bdy = await User.find({ email: req.body.Email })
    if (bdy[0]['Verified']) {
        res.send("You have been verified...Please login in!!!");
    } else {


        // const bdy = await SADMIN.find({ email: req.body.Email })
        console.log("Response from database", bdy)

        console.log("Unique code from postman", req.body.Unique_Code)
        console.log("JSON To", bdy[0]['Unique_Code'])

        if (bdy == '' || bdy[0]['Unique_Code'] != req.body.Unique_Code) {
            res.send('Wrong Unique code please try again!!')
        } else if (otp != req.body.otp) {
            res.send('your OTP is wrong')
        } else {
            const row = await User.findOneAndUpdate({ email: bdy[0]['email'] }, { Verified: true })
            console.log('Verification Successful!!')
            res.send('Verification Successful!!')
        }
    }
})


module.exports = routes