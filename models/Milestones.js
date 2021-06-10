const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");


const Milestones = new mongoose.Schema({
    process_id:{
        type:Number

    },

    manualId:{
        type:String
    },
    Milestone_No:{
        type : String,
        required:true
    },
    Tasks:[{}],
        Tasks_Undertaken_by_dept:[{}],
        Criteria_of_Task_Completed:[{}],
        Process:[{}]




})
autoIncrement.initialize(mongoose.connection);
Milestones.plugin(autoIncrement.plugin, {
  model: "post", // collection or table name in which you want to apply auto increment
  field: "process_id", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});


module.exports = mongoose.model('Milestones',Milestones)