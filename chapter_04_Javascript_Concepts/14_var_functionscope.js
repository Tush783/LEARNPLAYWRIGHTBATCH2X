var a = 10; //Global scope
console.log(a); //Output: 10

//Defination of the function
function printHello() {
    var a = 20; //Local scope
    console.log(a); //Output: 20
    if (true) {
        var a =30;
        console.log(a); //Output: 30, because var is function scoped, 
                        //the variable a declared inside the if block will affect the variable a declared in the function scope.
    }
    console.log("F-->",a); //Output: F--> 30, 
                          // because the variable a declared inside the if block will affect the variable a declared in the function scope.
}
console.log("G-->",a); //Output: G--> 10, 
                    // because the variable a declared in the global scope is not affected by the variable a declared in the function scope.
printHello();