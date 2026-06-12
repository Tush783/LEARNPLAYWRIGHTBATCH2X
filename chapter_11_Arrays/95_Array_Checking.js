// //Checking Arrays
// //Check if something is an array

// let result = Array.isArray([1,2,3]);
// console.log(result);

// let result1 = Array.isArray("a");
// console.log(result1);

//EVERY AND SOME
[80, 90, 100].every(s => s >= 70);  // true  → all 3 are >= 70 ✅
[80, 60, 100].every(s => s >= 70);  // false → 60 fails ❌, so the whole thing is false


//Realtime playwright example
[200,201,203].every(statuscode => statuscode > 200);

//Some - At least one must pass
[80, 60, 100].some(s => s < 70);  // true  → 60 qualifies ✅
[80, 90, 100].some(s => s < 70);  // false → none are < 70 ❌