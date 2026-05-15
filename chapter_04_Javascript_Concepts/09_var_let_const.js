var v = 10;
let l = 20;
const c =3.14;

var v = 100; // var allows you to redeclare and reassign a variable.
v=200; // var allows you to reassign a variable.

var browser = "chrome"; // var allows you to redeclare a variable.
var browser = "edge"; // var allows you to redeclare a variable.
browser = "firefox"; // var allows you to reassign a variable.


var testcase = ["login","logout","signup"];

for(var i=0; i<testcase.length; i++){
    console.log("Running test case:",testcase[i]);
}

console.log("Loop counter leaked outside the loop:", i); 
// var is function-scoped, so the variable 'i' is accessible outside the loop.
// let and const are block-scoped, so they do not allow redeclaration or reassignment in the same scope.

function say()
{
    console.log("Hi, I am a function");
}

say(); // Output: Hi, I am a function
say();