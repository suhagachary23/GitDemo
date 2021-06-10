const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const schemauser = new mongoose.Schema({
    firstname: {
        type: String
    },

    lastname: {
        type: String
    },

    email: {
        type: String,
        unique: true
    },

    phonenumber: {
        type: Number,
        unique: true
    },

    password: {
        type: String,

    },
    confirmpassword: {
        type: String
    },
    role: {
        type: String
    }
});
module.exports = mongoose.model('schemauser', schemauser)