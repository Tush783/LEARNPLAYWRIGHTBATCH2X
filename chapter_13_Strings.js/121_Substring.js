let str = "Login_Test_Pass_001";

// slice(start, end) — negative indexes supported
// "end" index is NOT included (stops one before it)

console.log(str.slice(0, 5));  // "Login" -> chars at index 0,1,2,3,4 (index 5 excluded)
console.log(str.slice(11));    // "Pass_001" -> from index 11 to the end (no end given)

let testNumber = str.slice(-3);
console.log(testNumber); // "001" -> negative index counts from the END (last 3 chars)

//SLICE VS SUBSTRING
let str1 = "Hello World";

// Normal usage — both behave the same
console.log(str1.slice(0, 5));        // "Hello"
console.log(str1.substring(0, 5));    // "Hello"

// Negative index — slice counts from end, substring treats as 0
console.log(str1.slice(-5));          // "World"  ✅
console.log(str1.substring(-5));      // "Hello World" (treated as 0) ❌

// start > end — substring swaps, slice returns empty
console.log(str1.slice(5, 0));        // ""       (no swap)
console.log(str1.substring(5, 0));    // "Hello"  (swapped to substring(0,5))
