const express = require('express');
const app = express();
const path = require('path');

//setup the hbs engine
app.set('view engine', 'hbs');
//app.set('views','myhbsfolder'); if we change the name of folder 

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/learnhbs',(req,res)=>{
    res.render('index.hbs');
    title:'My Page';
})

app.listen(8888,()=>{
    console.log('server started at http://localhost:8888');
})

