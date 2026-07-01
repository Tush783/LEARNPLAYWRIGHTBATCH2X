// We created a function called "test".
// It takes two things: the name of the test, and a callback (a function to run later).
// First it prints the name, then it runs the callback.
function test(testName, callback){
    console.log(testName);  // step 1 — print the test name
    callback();             // step 2 — run the function that was passed in
}

// In real Playwright, you do: import {test} from '@playwright/test'
// That "test" works exactly the same way — name + callback
//import {test} from '@playwright/test';

// Here we are calling our test function.
// We pass: the test name as a string, and an arrow function as the callback.
// When test() runs → it prints the name first, then runs what's inside the arrow function.
test("Verify Login Page is working", () => {
    console.log("Write you playwright code");
});
