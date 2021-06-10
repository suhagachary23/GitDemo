const express = require('express')
const routes = express.Router();
const process = require('../models/process')

const mongoose = require('mongoose');
routes.post('/', async (req, res) => {

    const bdy = new process({
        Name: req.body.Name,
        manualId: req.body.manualId,
        createdDate: req.body.createdDate,
        lastModifiedDate: req.body.lastModifiedDate,
        createdby: req.body.createdby,
        status: req.body.status
    })

    try {
        const a1 = await bdy.save()
        res.json(a1)
    } catch (error) {
        res.send('Error' + error)
    }
})
routes.get('/', async (req, res) => {
    const complete = process.find({status:'complete'})
    process.aggregate([

        { $group: { _id: null, count: { $sum: 1 } } },
        {
            $project: { _id: 0 }

        }

    ]).exec(function (err, results) {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})
module.exports = routes
