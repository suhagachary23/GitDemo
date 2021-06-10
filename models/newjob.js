//  const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const newjob = new mongoose.Schema({
    clientname: {
        type: String
    },

    projectname: {
        type: String
    },

    selecttask: {
        type: String
    },

    // authordetails: {
    //     type: String
    // },

    collateraltype: {
        type: String
    },
    deadline: {
        type: String
    },
    jobtype: {
        type: String
    },
    clientcode: {
        type: String
    },
    projectcode: {
        type: String
    },
    assignto: {
        type: String
    },
    numberofcollaterals: {
        type: String
    },
    workinghours: {
        type: String
    }
});
module.exports = mongoose.model('newjob', newjob)