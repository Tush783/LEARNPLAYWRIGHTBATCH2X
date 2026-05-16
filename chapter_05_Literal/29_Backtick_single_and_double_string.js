// 29_Backtick_single_and_double_string.js

// Single quotes and double quotes both create normal strings.
let single = 'Hello';
let double = "World";

// Backticks create a template string.
// They let you embed variables or expressions using ${ }.
let backtick = `Hello, ${double}`;

console.log(single);   // Hello
console.log(double);   // World
console.log(backtick); // Hello, World
