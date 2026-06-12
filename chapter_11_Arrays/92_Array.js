let fruits = ["banana","apple","cherry"];
fruits.sort(); //Sorted by the first character alphabetically
console.log(fruits);

let number = [3,1,4];
number.sort(); //This is fine normal sorting
console.log(number);

let num = [10,1,21,2];
num.sort(); 
console.log(num); //Lexical sorting

num.sort((a, b) => a-b);
console.log(num); // for sorting ascending order

num.sort((a, b) => a-b);
console.log(num); // for sorting descending order
