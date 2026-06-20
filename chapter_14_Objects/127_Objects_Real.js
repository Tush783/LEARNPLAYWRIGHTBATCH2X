// Start with an empty object and add properties dynamically — 
// common for building test configs at runtime
let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);

// delete removes the key entirely; 
// accessing it afterward returns undefined, not null
delete config.browser;
console.log(config);

// config.browser is undefined after deletion, 
// so this branch never runs
if(config.browser ==="chrome")
{
    console.log("I will execute my TC");
}
else
{
    console.log("Browser not available")
}

//Can create options in this way too
let config2 = {
    browser = "chrome",
    timeout = 3000,
    testname = "login test"
}
