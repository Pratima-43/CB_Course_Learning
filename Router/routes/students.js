const express = require('express');
const router= express.Router();

const students = [
    "Vishal",
    "Rahul",
    "Disha",
    "Tisha"
];

router.get('/',(req,res,next)=>{
    res.send(students);
})

router.post('/add',(req,res,next)=>{
    const {name} = req.body;
    teachers.push(name);
    res.redirect('/students');
})

module.exports = router;