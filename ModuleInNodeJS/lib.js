//libraries 
// create libraries to use in main so the we dont have to repeat the same code in main

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports.add = add  
module.exports.sub = sub
// console.log(baseModule.exports)



//This pollutes the global scope, so we use a library
// globalThis.add = function add(a,b){
//     return a+b;
// }
