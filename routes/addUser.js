const bcrypt = require('bcrypt');
const _ = require('lodash');
const { userdemo } = require('../models/userdemo');
const express = require('express');
const routes = express.Router();

routes.post('/', async (req, res) => {
    const register = new userdemo({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        employeecode: req.body.employeecode,
        department: req.body.department,
        supervisor: req.body.supervisor,
        designation: req.body.designation,
        role: req.body.role,
        officetel: req.body.officetel,
        mobile:req.body.mobile,
        email: req.body.email,
        officename: req.body.officename
    })
    try {

       const b = await register.save();
        res.send(b);
    } catch (error) {
        res.send(error)
    }
})

module.exports = routes;
