const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
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
    email: {
        type: String,
        // required: "email is required",
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    phonenumber: {
        type: Number,
        // required: true,
        minlength: 10,
        //maxlength: 10,
        unique: true
    },
    password: {
        type: String,
        // required: true,
        minlength: 5,
        maxlength: 1024
    },

    Unique_Code:{
        type:String
    },

    Verified:{
        type:Boolean,
        default:false
    },
    confirmpassword: {
        type: String,
        // required: true,
        minlength: 5,
        maxlength: 1024
    }
}));

exports.User = User;