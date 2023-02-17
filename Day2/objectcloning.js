//first method is iteration method
let src = {
a : 10 , 
b : 40 , 
c : 30 
};
let dest = { };
for (let key in src){
   dest[key] = src[key] ;
}
console.log(src);
console.log(dest);

let src2 = {
a : 'Nishit' , 
b : 40 , 
c : 30 
};

let dest2 = Object.assign({},src2);
console.log(src2);
console.log(dest2);
src2.b++;
let dest3 = {...src2};
console.log(dest3);