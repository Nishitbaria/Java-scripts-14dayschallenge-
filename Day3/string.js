let Lastname = 'Bariya';
let firstname  = new String(' Nishit ');
//if you want to find length of string use .length method
console.log(firstname.length);
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());
console.log(firstname[4]);
console.log(firstname.includes('Nish'))
console.log(firstname.includes('q'));
console.log(firstname.startsWith('N'));
console.log(firstname.endsWith('t'));
console.log(firstname.indexOf('N'));
console.log(firstname.trim());
console.log(firstname.replace('Nishit' , 'bariya'));


let message = new String('This is my first message');
let word = message.split(' ');
console.log(message.repeat('first' , 'second'));

console.log(word)

let mess = `This is mess 
for you 
that is nothings`; 
console.log(mess);