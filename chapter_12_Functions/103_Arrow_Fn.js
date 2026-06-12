//ARROW FUNTION (ES6)

const greet = function(name1){
    return "HI " + name1;
}

let r = greet("Tushar")
console.log(r);

//Arrow funtion
const greet1 = (name1) => "HI " + name1;
let r2 = greet("Tarun")
console.log(r2);

//If you want to make a normal funtion to arrow funtion
//Remove the keyword funtion, remove keyword return, remove curly braces and use this =>

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Dutta")