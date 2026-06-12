// //DIFFERENT WAY OF CREATING THE FUNCTION
// const greet = function (name){
//     return `SayHello, ${name}`
// }

// let r = greet("DIFFERENT STYLE OF CREATING THE FUNCTION");
// console.log(r);


//TYPE 4 NORMAL FUNCTION
function greet1(name1){
    return `Hello ${name1}`
}
//FUNCTION AS EXPRESSION
const greet2 = function(name1){
    return `Hello ${name1}`

}

console.log(greet1("BOB"));
console.log(greet2("BOB"));