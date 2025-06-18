//write the code
let lib1 = require('./lib1'); // control will go to lib1 and in lib1 it will call lib2 and in lib2 e have lib1 and it call lib2 and nothing going to happen 
//we resolve this using file dependency map
let lib2 = require('./lib2');

console.log(lib1);
console.log(lib2);


const lib =require('./lib')
console.log(lib.add(10,20)) //to add the add function in this we use global space
console.log(lib.sub(10,20)) 



