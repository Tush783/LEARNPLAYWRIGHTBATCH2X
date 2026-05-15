var a = 10;
//var is funtion scoped, 
// it means that if we declare a variable using var inside a function, 
// it will only be accessible within that function. 
// However, if we declare a variable using var outside of any function, it will be accessible globally.

console.log(a); // Output: 10

function printHello()
{
    console.log("Hello, Tushar");
    var a =20; //Local variable a is declared inside the function, it will not affect the global variable a.
    console.log(a); // Output: 20
    
    if(true)
    {
        var a = 30; // This will affect the local variable a declared in the function, because var is function scoped.
        console.log(a); // Output: 30
    }
}

printHello();