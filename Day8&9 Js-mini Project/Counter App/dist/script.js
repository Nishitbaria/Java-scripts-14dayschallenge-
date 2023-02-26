const CountValue =  document.querySelector('#counter')

//decrement funcation
const decrement = () => {
let value = (CountValue.innerText);
value = value-1;
CountValue.innerText = value;
}




//incremenmt funcation 
const increment= ()  => {
let value = parseInt(CountValue.innerText);
value = value+1;
CountValue.innerText = value;
}