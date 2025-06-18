//Default Arguments
function sum(x,y,z=4){
    return(x+y+z);
}
console.log(sum(5,6)); 



function sum(x=1,y,z){
    return(x+y+z);
}
console.log(sum(2,3));  // Output: NaN
// 2 will assigned to x and 3 will assigned to y and z will be undefined so NaN will be returned.

function Multiply2(num){
    return num*2;
}
function a(b){
    const res = b(10);
    return res;
}
const ans = a(Multiply2)
console.log(ans); // Output: 20








//filter methode array
const numbers = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
const isOdd = (num) => {
    if(num%2==0){
        return true;
    }
    return false;
}

const oddnums = numbers.filter(isOdd); //filtered out odd numbers
console.log(numbers);
console.log(oddnums);

function sum(a){
    if(!a) return 0;
    let ans = a;
    function smallerSum(b){
        if(!b) return ans;
        ans += b;
        return smallerSum;
    }
    return smallerSum;
}


