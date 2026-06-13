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

//function with no argument
function say() {
    console.log("Hio");
}

say();

//Arrow funtion with no argument
const say1 = () => console.log('Hi');
say1();

//Example 2
const say2 = () => 'Hi';
let r3 = say2();
console.log(r3);

//Multiple lines Arrow Function
const greet3 = (name) => {
    const message = "Hi" + name;
    return message; //when multiple lines returnis needed
}

let q = greet3("Tushar");
console.log(q);
