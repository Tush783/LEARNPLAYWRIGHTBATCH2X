//QUESTION 3 - Leap Year Check
//Problem : Take a year and check if its a leap year
//Rules
//Divisible by 4 and not divisible by 100 --> Leap Year
//Divisible by 400 --> Leap year
//Else not a leap year

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0))
{
    console.log("leap year");
}
else
{
    console.log("Not a leap year");
}