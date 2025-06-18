const fs = require('fs');

// async
// fs.readFile('image.jpg',{
//     encoding: 'base64'
//     }, (err, data) =>{
//         if(err) return console.log(err);
//         console.log(data);
    
// })

//sync
let file = fs.readFileSync('image.jpg');
console.lof(file);
let str = file.toString('base64');

console.log(str);

//to write
fs.writeFileSync('image.txt', str, );

//textfile to image
str = fs.readFileSync('image.txt', 'utf8'); //we get string back

//convert it back to image(buffer)
let buffer = Buffer.from(str, 'base64');
console.log(buffer);

fs.writeFile('image.jpg',buffer);