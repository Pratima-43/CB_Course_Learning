const path = require('path');
const express = require('express');
const app = express();
const port = 4444;

app.use(express.urlencoded({extended:true}));

 let students = [
        {id:1 , name:"ABC"},
        {id:2 , name:"EFG"},
        {id:3 , name:"XYZ"}
    ];

    //update
app.put('/students/:id',(req,res,next)=>{
   const {id} = req.params;
   const {name} = req.body;

   students = students.map((s)=>{
    if(s.id==id){
        return {id: s.id, name}
    }
    else{
        return s;
    }
   })
})

//delete
app.delete('/students/:id',(req,res,next)=>{
   const {id} = req.params;
   const {name} = req.body;

   students = students.filter((s)=>{
    if(s.id==id){
        return false;
    }
    else{
        return true;
    }
   })
   res.status(200).send(students);
})

app.listen(port,()=>{
    console.log(`http://localhost:`+port);
});