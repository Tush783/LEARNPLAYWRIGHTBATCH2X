// QUESTION 3 - Leap Year Check
// Problem: Take a year and check if it's a leap year

// Rules for determining a leap year:
// 1. Divisible by 4 and NOT divisible by 100 --> Leap Year
// 2. Divisible by 400 --> Leap Year
// 3. Else --> Not a leap year

// Example: 2024 is a leap year (divisible by 4, not by 100)
// Example: 1900 is NOT a leap year (divisible by 100, not by 400)
// Example: 2000 is a leap year (divisible by 400)

let year = 2024; // The year to check

// Check leap year conditions:
// Condition 1: (year % 4 === 0 && year % 100 !== 0)
//   - Divisible by 4 (remainder 0 when divided by 4)
//   - AND not divisible by 100 (remainder is NOT 0 when divided by 100)
// Condition 2: (year % 400 === 0)
//   - Divisible by 400 (remainder 0 when divided by 400)
// If either condition is true, it's a leap year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

