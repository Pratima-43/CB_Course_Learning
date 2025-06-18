const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
})

app.get('/',(req,res)=>{
    res.send(`Hello Goodmorning, ${req.query.name}`);
})

app.post('/greet',(req,res)=>{
    res.send(`Hello Goodmorning, ${req.query.name}`);
})

app.listen(8880,()=>{
    console.log('server started at http://localhost:8880');
})