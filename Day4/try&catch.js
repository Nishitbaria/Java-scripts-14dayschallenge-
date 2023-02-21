let person = {
Firstname : 'Nishit' , 
LastName : 'Bariya',
//getter concepts
get fullname(){
 return `  ${person.Firstname} ${this.LastName}`; 
} ,
//setter concepts 
set fullname(value) {
if(typeof value ==! String){
    throw new Error('You dont enter String');
}
let parts = value.split(' '); 
parts[0]  = this.Firstname; 
parts[1] = this.LastName ; 

}
};


try {
person.fullname = true;
}
catch(e){
    alert(e);
}
console.log(person.fullname);