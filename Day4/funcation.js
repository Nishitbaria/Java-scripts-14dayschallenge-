 function sum(a,b){
let total = 0; 
for(let value of arguments )
total = total + value;
return total;
}
let sums =   sum(1,4,6);
console.log(sums);