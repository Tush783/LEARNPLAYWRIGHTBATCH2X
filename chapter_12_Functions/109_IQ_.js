//Returns a value
function getStatus(code){
    if(code >= 200 && code < 300) return "Success";
    if(code >= 400 && code < 500) return "ClientError";
    if(code >= 500) return "ServerError";
}

console.log(getStatus(200));

function logTest(name){
    console.log(`Running: ${name}`);
    //no return statement
}

let result = logTest("Login");
console.log(result);

greet("Tushar"); // funcation calling before declaration

function greet(name){
    return `Hello, ${name}!`;
}

// sayHi("Bob");

// const sayHi = funtion (name) {
//     return `Hi, ${name}!`;
// }