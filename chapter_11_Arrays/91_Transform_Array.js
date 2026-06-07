let scores = [45,82,91,60,73];

//map - transform every element, return a new arrays
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

//filer - keeps elements that pass a test
let passing = scores.filter(s => s>70);
console.log(passing);

// reduce, // reduce - accumulates to a single value

let total = scores.reduce((a,b) => a+b, 0) 
console.log(total); //sum of the elements

// flat - flattens nested arrays
let nested = [[1,2],[3,4],[4,5]];
console.log(nested.flat());