let a = 10; //Global scope
console.log(a); //Output: 10

//Defination of the function
function printHello() {
    let a = 20; //Local scope
    console.log(a); //Output: 20, 
                    // because let is block scoped, 
                    // the variable a declared inside the function will not affect the variable a declared in the global scope.
    if (true) {
        let a =30;
        console.log(a); //Output: 30, 
                       // because let is block scoped, 
                       // the variable a declared inside the if block will not affect the variable a declared in the function scope.
    }
    console.log("F-->",a); //Output: F--> 20, 
                          // because the variable a declared inside the if block will not affect the variable a declared in the function scope.
}
console.log("G-->",a); //Output: G--> 10, 
                    // because the variable a declared in the global scope is not affected by the variable a declared in the function scope.
printHello();