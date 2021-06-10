const express = require('express');
const routes = express.Router();
const Milestone = require('../model/Milestones')
routes.get('/',async(req,res)=>{
    const b = await Milestone.find()
    try {
        console.log(b)
    } catch (error) {
        res.send('Error '+error)
    }
})
routes.post('/',async(req,res)=>{
    const body = new Milestone({
        manualId:req.body.manualId,
        Milestone_No:req.body.Milestone_No,
        Milestone:req.body.Milestone
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
