const path = require('path');
const express = require('express');
const app = express();
const port = 4444;

app.use(express.urlencoded({extended:true}));

const teacherHandler = require('./routes/teachers');
app.use('/teachers',teacherHandler);

const studentsHandler = require('./routes/students');
app.use('/students',studentsHandler);

app.listen(port,()=>{
    console.log(`http://localhost:`+port);
});