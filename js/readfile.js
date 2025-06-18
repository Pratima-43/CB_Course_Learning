const {readfile} = require('fs');

readfile(
    "hello.txt";
    {
        encoding: 'utf8'
    },
    (err, data) =>{
        if (err) return console.log(err);
        console.log(data);
    }
)