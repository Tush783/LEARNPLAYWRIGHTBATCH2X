// Searching & Checking
let url = "https://staging.vwo.com/api/login?retry=true";

// includes() - checks if a substring EXISTS anywhere in the string (returns true/false)
console.log(url.includes("staging"));    // true  -> "staging" is present in the URL
console.log(url.includes("production")); // false -> "production" is NOT present

// startsWith() / endsWith() - check the BEGINNING or END of the string
url.startsWith("https");    // true  -> URL starts with "https"
url.startsWith("http://");  // false -> URL starts with "https://", not "http://"
url.endsWith("true");       // true  -> URL ends with "true" (from ?retry=true)

// indexOf / lastIndexOf

// indexOf() - returns the position of the FIRST occurrence of a substring
console.log(url.indexOf("a"));     // 10 -> first "a" is in "staging" (index 10)

// lastIndexOf() - returns the position of the LAST occurrence of a substring
console.log(url.lastIndexOf("a")); // 24 -> last "a" is in "api" (index 24)

// If the substring is NOT found, both methods return -1
console.log(url.indexOf("nothere")); // -1 -> "nothere" doesn't exist in the URL

// search() - searches the string using a REGEX pattern (regular expression)
// returns the index of the FIRST match (like indexOf, but supports regex patterns)
console.log(url.search(/login/)); // 28 -> "login" starts at index 28

// Start search at position N → indexOf(x, N)
url.indexOf("a", 11);      // 24 -> skip the first 11 chars, find "a" AFTER that
                            // (ignores the "a" in "staging" at index 10)

// Pattern / case-insensitive / flexible match → search
url.search(/Login/i);      // 28 -> regex with "i" flag = case-insensitive

// Just yes/no → includes
url.includes("login");     // true -> no position needed, just a boolean