const express = require('express');
// const path = require('path');
const newjob = require('../models/newjob');
const routes = express.Router();

routes.get('/clientname', async (request, response) => {
    try {
        const u = await newjob.find({}, { clientname: 1, _id: 1 })
        const a = await newjob.find({ clientname: u[0]['clientname'] }, { clientcode: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});

routes.get('/projectname', async (request, response) => {
    try {
        const u = await newjob.find({}, { projectname: 1, _id: 1 })
        const a = await newjob.find({}, { projectname: u[0]['projectname'] }, { projectcode: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});

routes.get('/selettask', async (request, response) => {
    try {
        const u = await newjob.find({}, { selettask: 1, _id: 1 })
        // const a = await newjob.find({}, { projectname: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});

routes.get('/collateraltype', async (request, response) => {
    try {
        const u = await newjob.find({}, { collateraltype: 1, _id: 1 })
        // const a = await newjob.find({}, { projectname: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});

routes.get('/deadline', async (request, response) => {
    try {
        const u = await newjob.find({}, { deadline: 1, _id: 1 })
        // const a = await newjob.find({}, { projectname: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});

routes.get('/jobtype', async (request, response) => {
    try {
        const u = await newjob.find({}, { jobtype: 1, _id: 1 })
        // const a = await newjob.find({}, { projectname: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});

routes.get('/jobtype', async (request, response) => {
    try {
        const u = await newjob.find({}, { jobtype: 1, _id: 1 })
        // const a = await newjob.find({}, { projectname: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});



routes.get('/clientcode', async (request, response) => {
    try {
        const u = await newjob.find({}, { clientcode: 1, _id: 1 })
        // const a = await newjob.find({}, { projectname: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});

routes.get('/numberofcollaterals', async (request, response) => {
    try {
        const u = await newjob.find({}, { numberofcollaterals: 1, _id: 1 })
        // const a = await newjob.find({}, { projectname: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});

routes.get('/workinghours', async (request, response) => {
    try {
        const u = await newjob.find({}, { workinghours: 1, _id: 1 })
        // const a = await newjob.find({}, { projectname: 1, _id: 0 });
        response.send(u);
    } catch (error) {
        response.send('Error ' + error);
    }
});

// deadline:1,jobtype:1,assignto:1,numberofcollaterals:1,workinghours:1, _id: 0 });


routes.post('/', async (req, res) => {
    const nj = new newjob({
        clientname: req.body.clientname,
        projectname: req.body.projectname,
        selecttask: req.body.selecttask,
        // authordetails: req.body.authordetails,
        collateraltype: req.body.collateraltype,
        deadline: req.body.deadline,
        jobtype: req.body.jobtype,
        clientcode: req.body.clientcode,
        projectcode: req.body.projectcode,
        assignto: req.body.assignto,
        numberofcollaterals: req.body.numberofcollaterals,
        workinghours: req.body.workinghours
        // skill: request.body.dropDown
    })


    try {
        const nb = await nj.save();
        res.send(nb);
    } catch (error) {
        res.send(error);
    }
})

module.exports = routes
