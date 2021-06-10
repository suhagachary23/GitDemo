const { response } = require('express');
const express=require('express')
const routes=express.Router();
const { userdemo } = require('../models/userdemo');
const Milestones  = require('../models/Milestones');

routes.get('/firstname',async(req,res)=>{
    const user=await userdemo.find({},{firstname:1,_id:1})
    try{
        res.json(user)
    }
    catch(e){
        res.json(e)
    }
})

routes.get('/Tasks',async(req,res)=>{
    const user=await Milestones.find({},{Tasks:1,_id:1})
    try{
        console.log(user)
        res.json(user)
    }
    catch(e){
        res.json(e)
    }
})

routes.get('/fetchemployee',async(req,res)=>{
    const user=await userdemo.find({},{firstname:1,_id:1,department:1,designation:1,employeecode:1})
    try{
        console.log(user)
        res.json(user)
    }
    catch(e){
        res.json(e)
    }
})



module.exports=routes