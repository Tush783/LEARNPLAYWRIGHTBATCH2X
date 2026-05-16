//JS ENGINE
//LINE BY LINE , JIT COMPILATION

console.log(greeting); //OUTPUT: undefined
var greeting = "Hello, World!";
console.log(greeting); //OUTPUT: Hello, World!

//In the above code, the variable 'greeting' is declared using 'var' and is hoisted to the top of its scope. 
// However, only the declaration is hoisted, not the initialization. 
// Therefore, when we try to access 'greeting' before it is assigned a value, it returns 'undefined'. 
// After the assignment, it returns the expected string "Hello, World!"

//Behind the scenes, the JavaScript engine processes the code in two phases:
//1. Creation Phase: During this phase, the engine scans the code for variable and function declarations. 
//   It allocates memory for these declarations and initializes them with default values (undefined for variables).
//2. Execution Phase: In this phase, the engine executes the code line by line. 
//   When it encounters a variable declaration, it uses the hoisted declaration from the creation phase. 
//   If it encounters a variable assignment, it updates the value of the variable in memory.

//In Simple
//First, JavaScript sees var greeting before running code and reserves space for it.
//That makes greeting exist as undefined at the start.
//Then it runs code line by line and only sets "Hello, World!" when it reaches that assignment.

//Behind the scenes:
//var greeting; // hoisted with undefined