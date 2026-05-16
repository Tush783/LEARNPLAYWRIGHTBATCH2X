console.log(a); // Output: undefined, because of hoisting, the variable a is declared but not initialized.
console.log("Hei");
console.log("Hei");
console.log("Hei");
console.log("Hei");

const a = "Tushar";// After this line, the variable a is initialized with the value "Tushar".
                    //  Before this line, it is in the Temporal Dead Zone (TDZ) and cannot be accessed.
                    //ReferenceError: Cannot access 'a' before initialization
