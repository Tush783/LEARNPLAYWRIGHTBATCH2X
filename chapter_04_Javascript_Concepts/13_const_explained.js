const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https://QA.thetestingacademy.com"; // TypeError: Assignment to constant variable.


const name = "Tushar";
name = "Tushar Shetty"; // TypeError: Assignment to constant variable. //reassigning is not allowed for const variables.
const name = "Tushar Shetty"; // SyntaxError: Identifier 'name' has already been declared // redeclaring a const variable in the same scope is not allowed.

let name1 = "Tushar";
//let name1 = "Tushar Shetty"; // SyntaxError: Identifier 'name1' has already been declared // redeclaring a let variable in the same scope is not allowed.
name1 = "Tushar Shetty"; // This is valid, we can reassign a new value to a variable declared with let.
{
    let name = "Tushar Shetty"; // This is valid, we can declare a new variable with the same name in a different block scope.
}

