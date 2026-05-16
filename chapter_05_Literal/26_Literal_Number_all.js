// 36_Literal_Number_all.js
// JavaScript number types and numeric literal formats

// JavaScript has two main numeric types:
// 1. Number    -> standard numeric values, including integers and floating-point numbers.
// 2. BigInt    -> large integer values beyond the safe Number limit.

// Number examples (IEEE 754 double-precision):
let decimalNumber = 123;              // decimal
let floatNumber = 12.34;              // floating-point
let exponentialNumber = 1.23e3;       // exponential notation (1.23 * 10^3)
let hexNumber = 0xFF;                 // hexadecimal (255)
let binaryNumber = 0b1010;            // binary (10)
let octalNumber = 0o755;              // octal (493)

console.log(decimalNumber);           // 123
console.log(floatNumber);             // 12.34
console.log(exponentialNumber);       // 1230
console.log(hexNumber);               // 255
console.log(binaryNumber);            // 10
console.log(octalNumber);             // 493

// Special Number values:
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);               // NaN (not a number)

// BigInt example: use n suffix for very large integers.
let bigIntValue = 9007199254740991n; // Number.MAX_SAFE_INTEGER is 9007199254740991
let largerBigInt = 9007199254740993n;

console.log(bigIntValue);             // 9007199254740991n
console.log(largerBigInt);            // 9007199254740993n

// Note: BigInt is for integers only. It cannot be used with decimals.
// Example of invalid BigInt usage (uncomment to see an error):
// let badBigInt = 12.34n;

// Comparing Number and BigInt:
console.log(typeof decimalNumber);    // "number"
console.log(typeof bigIntValue);      // "bigint"

// Safe integer limit for Number
console.log(Number.MAX_SAFE_INTEGER);           // 9007199254740991
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false

// Summary:
// - Use Number for most numeric values, including decimals.
// - Use BigInt for very large integers outside the safe Number range.
// - JavaScript also supports multiple literal formats: decimal, float, exponential, hex, binary, and octal.
