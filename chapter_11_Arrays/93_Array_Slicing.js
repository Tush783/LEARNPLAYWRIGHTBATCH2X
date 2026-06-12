// // Slicing and Combining
// let arr = [1,2,3,4,5];

// // slice(start, end) → returns a NEW array (does not change original)
// // - Start index is inclusive
// // - End index is exclusive (takes up to end-1)
// // - If end is omitted → takes from start till the end
// // - Negative index → counts from the end (e.g., -2 means 2nd last element onwards)

// console.log(arr.slice(1,3));  
// // From index 1 to 2 → [2, 3]

// console.log(arr.slice(2,4));  
// // From index 2 to 3 → [3, 4]

// console.log(arr.slice(2,5));  
// // From index 2 to 4 → [3, 4, 5]

// console.log(arr.slice(1));    
// // From index 1 till end → [2, 3, 4, 5]

// console.log(arr.slice(-2));   
// // Last 2 elements → [4, 5]

// console.log(arr.slice(0));   
// //Prints all the elements

// //SLICE
// const arr = [1, 2, 3, 4, 5];
// const result = arr.slice(1, 3);

// console.log(result); // [2, 3]
// console.log(arr);    // [1, 2, 3, 4, 5] ← original unchanged

//SPLICE
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2);

console.log(removed); // [2, 3]
console.log(arr);     // [1, 4, 5] ← original is changed!