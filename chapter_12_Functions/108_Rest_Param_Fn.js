//Rest Parameters (.Rest Parameters (...)
//Collects all remaining arguments into an array.
//javascript
function logResult(suitName, ...results) {
    console.log(suitName);  // single value
    console.log(results);   // array of remaining
}

logResult('Login Test', 1, 2, 3);
// Login Test
// [1, 2, 3]

logResult('Reg Test', "Hello", "Pramod");
// Reg Test
// ['Hello', 'Pramod']
//Key rule: ...rest must always be the last parameter.