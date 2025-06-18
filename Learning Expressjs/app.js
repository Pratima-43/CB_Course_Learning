const express = require('express');
const PORT = 8888;
const app = express();
const path = require('path');

app.use('/file',express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    // console.log(req);
    console.log(__dirname);
    res.send('Hello World');

});


// app.get('/greet/:name',(req,res)=>{
//     console.log(req);
//     res.send(`Hello ${req.params.name}`);
// })

app.get('/greet',(req,res)=>{
    console.log(req);
    res.send(`Hello Good${req.query.x} ${req.query.name}`);
});

// app.get('/file',(req,res)=>{
//     res.sendFile(__dirname + '/index.html'); //if we do changes in our html file then thier is no need to restart the server
// })

app.get('/server.js',(req,res)=>{
    res.send(`console.log('Here is the requested js')`);
})

//Sending folder


app.listen(PORT, (err)=>{
    console.log(`server started at http://localhost:${PORT}`);
});