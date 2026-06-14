// Single quotes - basic string
let a = 'hello';

// Double quotes - same thing, just a different style
let b = "world";

// Template literals (backticks) let you embed variables/expressions
// using ${...} - called "string interpolation"
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2+2}`;
console.log(msg); // "Hello, Alice! 2 + 2 = 4"

// Multiline strings - backticks preserve line breaks and spacing
let report = `
    Test: Login
    Status: Pass
    Duration: 320ms`;

// String() converts any value to its string representation
console.log(String(200));   // "200"
console.log(String(true));  // "true"
console.log(String(null));  // "null"

// Note: arrays get joined with commas, NOT wrapped in brackets
console.log(String([1, 2])); // "1,2"  (not "[1,2]")