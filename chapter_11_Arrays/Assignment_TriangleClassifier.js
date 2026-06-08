// Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), or scalene (no sides are equal). 
// Use an if-else statement to classify the triangle.

let a = 10 , b = 10, c = 10;

if (a === b && b === c) {
    console.log("TRIANGLE IS EQUILATERAL");
}

else if (a === b || b === c || a === c) {
    console.log("TRIANGLE IS ISOSCELES TRIGANGLE");
}
else
    console.log("TRIANGLE IS SCALENE");
