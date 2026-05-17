let x = 10;
x +=10; // This is a shorthand operator that adds 10 to the current value of x (which is 10) 
        // and assigns the result back to x. So, x becomes 20.

console.log(x); // Output: 20 (because x was initially 10, and we added 10 to it)

x -= 5; // This is a shorthand operator that subtracts 5 from the current value of x (which is now 20)
        // and assigns the result back to x. So, x becomes 15.

console.log(x); // Output: 15 (because x was 20, and we subtracted 5 from it)
x *= 2; // This is a shorthand operator that multiplies the current value of x (which is now 15)
        // by 2 and assigns the result back to x. So, x becomes 30.         

console.log(x); // Output: 30 (because x was 15, and we multiplied it by 2)
x /= 3; // This is a shorthand operator that divides the current value of x (which is now 30)
        // by 3 and assigns the result back to x. So, x becomes 10.
console.log(x); // Output: 10 (because x was 30, and we divided it by 3)    

x %= 4; // This is a shorthand operator that calculates the remainder of x (which is now 10)
        // divided by 4 and assigns the result back to x. So, x becomes 2 (because 10 divided by 4 leaves a remainder of 2).
console.log(x); // Output: 2 (because x was 10, and we calculated the remainder when dividing by 4)