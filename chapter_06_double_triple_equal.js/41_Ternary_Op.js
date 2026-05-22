// Ternary Operator Example
//SYNTAX: condition ? value_if_true : value_if_false

let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 18 ? "Yes, Rajkumar can go to Goa." : "No, Rajkumar cannot go to Goa.";

//rajkumar_age >= 18 --> Condition
//"Yes, Rajkumar can go to Goa." --> Value if condition is true
//"No, Rajkumar cannot go to Goa." --> Value if condition is false

console.log(rj_will_goa); // Output: "Yes, Rajkumar can go to Goa."

//Real Life example 1
let actualStatusCode = 404;
let expectedStatusCode = 200;

let testResulut = actualStatusCode === expectedStatusCode ? "Test Passed!" : "Test Failed!";
console.log(testResulut); // Output: "Test Failed!";

//Real Life example 2
let environment = "staging";

let baseURL = environment === "production" ? "https://api.production.com" : "https://api.staging.com";
console.log(baseURL); // Output: "https://api.staging.com"

let isCI = true;
let browser = isCI ? "Headless Chrome" : "Headed";
console.log(browser); // Output: "Headless Chrome"

let responseTime = 850; // in milliseconds
let sla = 1000; // Service Level Agreement in milliseconds

let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`ResponseTime is ${responseTime}ms and SLA status is ${slaStatus}`);

//Nested Ternary Operator Example
//Multiple conditions

let age = 65;
let category = age < 13 ? "Child" : 
                age < 20 ? "Teenager" :
                age < 60 ? "Adult" : "Senior Citizen";
console.log(category); // Output: "Senior Citizen"   

let age_Tushar = 45;

let can_Tushar_drink = age_Tushar < 18 ? "No, Tushar cannot drink alcohol." :
                        age_Tushar < 21 ? "Tushar can drink beer." :
                        age_Tushar < 65 ? "Tushar can drink all types of alcohol." : "Tushar should drink in moderation.";
console.log(can_Tushar_drink); // Output: "Tushar can drink all types of alcohol."

let statusCode = 500;
let statusMessage = statusCode === 200 ? "OK" :
                    statusCode === 404 ? "Not Found" :
                    statusCode === 500 ? "Internal Server Error" : "Unknown Status Code";
console.log(`Status Code: ${statusCode}, Status Message: ${statusMessage}`); 
// Output: "Status Code: 500, Status Message: Internal Server Error"

//Assignment: Write a program to find the maximum of 2 and 3 numbers using ternary operator.
//maximum of 2 numbers using ternary operator
let number1 = 10;
let number2 = 20;

let maxNumber  = number1 > number2 ? "Number 1 is bigger: " + number1 : "Number 2 is bigger:" + number2;
console.log(`Maximum number is: ${maxNumber}`); // Output: "Maximum number is: Number 2 is bigger:20"


//maximum of 3 numbers using ternary operator
let a = 15;
let b = 15;
let c = 10;

let maxABC = a > b
  ? (a > c ? "A IS BIGGEST" : c > a ? "C IS BIGGEST" : "A AND C ARE EQUAL & BIGGEST")
  : a < b
    ? (b > c ? "B IS BIGGEST" : c > b ? "C IS BIGGEST" : "B AND C ARE EQUAL & BIGGEST")
    : (a > c ? "A AND B ARE EQUAL & BIGGEST" : c > a ? "C IS BIGGEST" : "A, B, C ARE ALL EQUAL");

console.log(maxABC);