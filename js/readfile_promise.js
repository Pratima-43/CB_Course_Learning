const {readfile} = require('fs');
// let file = readfile('file.txt')

async function readfile(filename) {
    let data = await readfile(file.txt);
    console.log(data.toString());
}

readData();
console.log("Running Statement");

// file.then((data)=>{
//     console.log(data)
//     }).catch((err)=>{
//         console.log(err);
//     })
