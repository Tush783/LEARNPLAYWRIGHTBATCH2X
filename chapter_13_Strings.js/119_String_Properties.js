console.log(typeof("400")); // "string" - even though it looks like a number, it's a string

let str = "Hello, World!";
console.log(str.length); // 13 -> total count of characters (length is a COUNT, not an index)

// Access by index - indexing starts from 0
console.log(str[0]); // "H" -> first character (index 0)
console.log(str[7]); // "W" -> 8th character (index 7)

// .at() is a METHOD, so use () not []
// Negative numbers count from the END of the string
console.log(str.at(-1)); // "!" -> last character
console.log(str.at(-6)); // "W" -> 6th character from the end

// Rule: indexing starts at 0, but length gives a 1-based count
console.log(str.charAt(0));     // "H" -> character at index 0
console.log(str.charCodeAt(0)); // 72  -> ASCII/Unicode code of "H"