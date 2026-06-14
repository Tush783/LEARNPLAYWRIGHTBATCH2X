let str = "Hello World!";
// toUpperCase() makes every letter big (capital)
console.log(str.toUpperCase()); // "HELLO WORLD!".

// toLowerCase() makes every letter small
console.log(str.toLowerCase()); // "hello world!"

// trim() removes extra spaces from start and end // there are no extra spaces here, so nothing changes
console.log(str.trim()); // "Hello World!"

// trimStart() removes spaces only from the beginning // trimEnd() removes spaces only from the end
// NOTE: these don't change "str" itself (strings can't be changed)
// and since we don't save or print the result, nothing happens here
str.trimStart();
str.trimEnd();

let msg = "Test: FAIL. Retry: FAIL.";
// replace() with a plain string changes ONLY the FIRST match
console.log(msg.replace("FAIL", "PASS")); // "Test: PASS. Retry: FAIL."

// replaceAll() changes EVERY match
console.log(msg.replaceAll("FAIL", "PASS")); // "Test: PASS. Retry: PASS."

// replace() with a regex + "g" flag also changes EVERY match
console.log(msg.replace(/FAIL/g, "PASS")); // "Test: PASS. Retry: PASS."

// Concatenation = joining strings together // (none of these 3 lines are printed, so nothing shows up)
// + just joins strings side by side
"Hello" + " " + "World";

// concat() also joins strings together // BUT careful: "+ \"World\"" here means "turn World into a number"
// "World" can't become a number, so it becomes NaN
// if this WAS printed, it would say "Hello NaN" (a small bug)
"Hello".concat(" ", +"World");

// Template literals use backticks and ${} to insert values
`${"Hello"} ${"World"}`;

let url = "https://app.vmo.con?app=pramod";

// replace every "app" with "qa" using a global regex
console.log(url.replace(/app/g, "qa")); 
// "https://qa.vmo.con?qa=pramod"

// split(",") breaks a string into an array using "," as the divider
// NOTE: the space after each comma stays with the next word
let r = "pass, fail, skip".split(",");
console.log(r); // ["pass", " fail", " skip"]

// split("_") breaks the string by "_" into an array
// join(" ") then puts those pieces back together with spaces
let rr = "test_login_pass".split("_").join(" ");
console.log(rr); // "test login pass"

// join("_") combines array items into one string, separated by "_"
let parts = ["2024", "03", "07"];
let date = parts.join("_");
console.log(date); // "2024_03_07"