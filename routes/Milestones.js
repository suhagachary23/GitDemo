const express = require('express');
const routes = express.Router();
const Milestone = require('../models/Milestones')
// const Department =require('../models/department')
routes.get('/',async(req,res)=>{
    const b = await Department.find({},{Department_Members:0,Department_Supervisor:0,Department_id:0})
    console.log(b)
    try {
        
        res.json(b)
    } catch (error) {
        res.send('Error '+error)
    }
})
routes.post('/',async(req,res)=>{
    const body = new Milestone({
        manualId:req.body.manualId,
        Milestone_No:req.body.Milestone_No,
        Milestone:req.body.Milestone,
        Tasks:req.body.Tasks,
        Tasks_Undertaken_by_dept:req.body.Tasks_Undertaken_by_dept,
        Criteria_of_Task_Completed:req.body.Criteria_of_Task_Completed,
        Process:req.body.Process
    })
    try{
        const b = await body.save()
        res.send(b)

    }catch(error){
        console.log('Error '+error)
        res.send('Error '+error)
    }
})
module.exports = routes