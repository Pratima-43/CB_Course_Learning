//function that we run for request call as middlewares

const express = require('express');
const app = express();

function m1(req,res,next){
    console.log(' Running M1');
    next();
}
function m2(req,res,next){
    console.log(' Running M2');
}
function m3(req,res,next){
    console.log(' Running M3');
}

app.use(m1);
app.use(m2);
app.use(m3);
app.use(express.urlencoded({extended:true})); // global middleware


app.get('/',(req,res)=>{
    res.send('Learning Middlewares');
})

app.listen(8888,()=>{
    console.log('Server started at http://localhost:8888');
})

