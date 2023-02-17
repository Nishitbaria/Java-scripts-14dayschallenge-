let number = [1,3,6,7,8];
number.pop();
console.log(number);
number.shift();
console.log(number);
// 3 6 7 
number.splice(1,1);
console.log(number);
let number2 = number ; 
//if you want to empty the whole arry then we can you this method
number.length = 0;

console.log(number2);
