let first = [1,2,3];
let second = [4,5,6];
let third  = [1,2,3,4,5,6];
//first method
let combined  = first.concat(second);
//second method 
let combined2 = [...first , ...second];
let slicing = 
console.log(combined);
console.log(combined2);
let sliced = combined.slice(2,5);
console.log(sliced);
 

