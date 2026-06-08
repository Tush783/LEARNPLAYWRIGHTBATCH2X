// ✅ FizzBuzz Test:
// Write a program that prints numbers from 1 to 100. 
// However, for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." 
// For numbers that are multiples of both 3 and 5, print "FizzBuzz."

for (let a = 0; a<=100; a++)
{
    if (a%3 === 0 && a%5 !== 0)
    {
        console.log("FIZZ", a);
    }
    else if (a%5 === 0 && a%3 !== 0)
    {
        console.log("BUZZ", a);
    }
    else if(a%3 === 0 && a%5 === 0)
    {
        console.log("FIZZ BUZZ", a);
    }
    else
    {
        console.log("NOT A FIZZBUZZ", a);
    }
}

