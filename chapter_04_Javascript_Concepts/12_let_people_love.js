//let - Block Scope
let a = 10;

let retryCount =0;

retryCount = retryCount + 1; // This is valid, we can reassign a new value to a variable declared with let.
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry Count : " +retryCount); // Output: Retry Count : 3

//let retryCount = 5; // This will cause an error, we cannot redeclare a variable declared with let in the same scope.
//SyntaxError: Identifier 'retryCount' has already been declared

let testStatus = "Pending" ;
if(testStatus === "Pending")
{
    let exectionTime = 1200;
    console.log("Inside if block : " + exectionTime); // Output: Inside if block : 1200
}

console.log("Outside if block : " + exectionTime); // This will cause an error, exectionTime is not defined outside the if block.
//ReferenceError: exectionTime is not defined