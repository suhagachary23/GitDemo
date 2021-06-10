const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
// createdby FK
// lastModifiedBy FK

const Process = new mongoose.Schema({
    process_id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    manualId: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },
    lastModifiedDate: {
        type: Date,
        required: true
    },
    createdby: {
        type: String
    },
    status: {
        type: String
    }
})

autoIncrement.initialize(mongoose.connection);
Process.plugin(autoIncrement.plugin, {
    model: "post", // collection or table name in which you want to apply auto increment
    field: "process_id", // field of model which you want to auto increment
    startAt: 1, // start your auto increment value from 1
    incrementBy: 1, // incremented by 1
});

module.exports = mongoose.model('Process', Process)
