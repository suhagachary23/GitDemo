const mongoose = require('mongoose');

const userdemo = mongoose.model('userdemo', new mongoose.Schema({
    firstname: {
        type: String,
        // required: true,
        minlength: 5,
        maxlength: 50
    },
    lastname: {
        type: String,
        // required: "email is required",
        minlength: 5,
        maxlength: 50
    },
    employeecode: {
        type: String,
        // required: "email is required",
        minlength: 0,
        maxlength: 50
    },
    department: {
        type: String,
        // required: "email is required",
        minlength: 5,
        maxlength: 50
    },
    supervisor: {
        type: String,
        // required: "email is required",
        minlength: 5,
        maxlength: 50
    },
    designation: {
        type: String,
        // required: "email is required",
        minlength: 5,
        maxlength: 50
    },
    role: {
        name: 'type',
        type: 'string',
        rules: 'required',
        options: ['Admin', 'Super Admin', 'user']
    },
    officetel: {
        type: String
        // required: true,
        // minlength: 10,
        // //maxlength: 10,
        // unique: true
    },
    mobile:{
        type: String
    },
    email: {
        type: String,
        // required: "email is required",
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    officename: {
        type: String,
        // required: "email is required",
        minlength: 5,
        maxlength: 50
    }
}));

exports.userdemo = userdemo;
