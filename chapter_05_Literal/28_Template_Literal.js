let firstname = "Tushar";
let fullname = `Hi ${firstname} Shetty`;
//Template literal allows us to embed expressions inside string literals using ${} syntax.

console.log(fullname); // Output: Hi Tushar Shetty

let env = "staging";
env = "production";
const userID = 12345;
const apiURL = `https://${env}.ianalytics.com/api/user/${userID}`;
console.log(apiURL); // Output: https://production.ianalytics.com/api/user/12345
//In the above example, we used template literals to construct a URL 
//by embedding the values of env and userID variables directly into the string.
//This makes it easier to read and maintain compared to traditional string concatenation methods.