const express = require('express');
const app = express();
const port=4444;
const path = require('path');
app.use(express.static(path.join(__dirname,'static')));

app.listen(prompt,()=>{
    console.log('http://localhost:'+port);
})