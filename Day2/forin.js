let ractangle =  {
length : 5 , 
with : 29 ,
area :  function(){    
return this.with * this.length ; 
}


};
for(let key in ractangle){
    console.log(key,ractangle[key])
}