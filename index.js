// const Joi = require('joi');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
var bodyParser = require('body-parser');
const users = require('./routes/users');
const auth = require('./routes/auth');
const addUser = require('./routes/addUser');
const newjob = require('./routes/newjob');
const express = require('express');
const path = require('path');
const uploadroutes =require('./routes/uploadroutes');
const fetchUser = require('./routes/fetchUser');

const app = express();

mongoose.connect('mongodb://localhost/EmployeeDB')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(cors());
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/test', require('./routes/userch'));
app.use('/api/authorization', require('./routes/authorization'));
app.use('/api/addUser', require('./routes/addUser'));
app.use('/api/newjob', require('./routes/newjob'));
app.use('/api/process', require('./routes/process'));
app.use('/api/fetchUser',require('./routes/fetchUser'));
app.use('/api/mail', require('./routes/mail'));
app.use('/api/Milestones',require('./routes/Milestones'));


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

