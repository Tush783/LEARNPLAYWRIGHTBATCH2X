// Loose equality (==) vs strict equality (===) examples in JavaScript

// number and string
console.log(1 == "1");   // true  -> string "1" coerces to number 1
console.log(1 === "1");  // false -> different types: number vs string

// number and boolean
console.log(0 == false);  // true  -> false coerces to number 0
console.log(0 === false); // false -> different types: number vs boolean

// null and undefined
console.log(null == undefined);  // true  -> special case in ==
console.log(null === undefined); // false -> different types

// empty string and number
console.log(0 == "");   // true  -> empty string coerces to number 0
console.log(0 === "");  // false -> different types: number vs string

// empty string and string "0"
console.log("" == "0");   // false -> both strings, values differ
console.log("" === "0");  // false -> both strings, values differ

// array and string
console.log([1,2] == "1,2");  // true  -> array coerces to string "1,2"
console.log([1,2] === "1,2"); // false -> different types: object vs string

// same type, same value
console.log(5 == 5);   // true
console.log(5 === 5);  // true

// same type, different value
console.log(5 == 6);   // false
console.log(5 === 6);  // false

// confusing loose equality cases
console.log("" == 0);      // true  -> empty string coerces to number 0
console.log("" === 0);     // false -> different types: string vs number

console.log("0" == false); // true  -> "0" coerces to number 0, false coerces to number 0
console.log("0" === false);// false -> different types: string vs boolean

console.log("" == false);  // true  -> both coerce to number 0
console.log("" === false); // false -> different types: string vs boolean

console.log([] == "");     // true  -> [] coerces to "", both then compare as equal strings
console.log([] === "");    // false -> different types: object vs string

console.log([] == ![]);      // true  -> ![] is false, [] coerces to "", then to 0, false also coerces to 0
console.log([] === ![]);     // false -> different types: object vs boolean

console.log(null == 0);      // false -> null only equals undefined in loose equality
console.log(null === 0);     // false -> different types: object vs number

console.log(undefined == 0);  // false -> undefined only equals null in loose equality
console.log(undefined === 0); // false -> different types: undefined vs number

// boolean coercion to number
console.log(true == 1);   // true  -> true coerces to number 1
console.log(false == 0);  // true  -> false coerces to number 0
console.log(true === 1);  // false -> different types: boolean vs number

// NaN behavior
console.log(NaN == NaN);   // false -> NaN is never equal to itself
console.log(NaN === NaN);  // false -> even strict equality fails
console.log(Number.isNaN(NaN)); // true  -> use Number.isNaN to detect NaN
console.log(isNaN("foo")); // true  -> global isNaN coerces before checking
console.log(Number.isNaN("foo")); // false -> no coercion

// object vs primitive
console.log(new String("abc") == "abc");  // true  -> object coerces to primitive "abc"
console.log(new String("abc") === "abc"); // false -> different types: object vs string
console.log(Object("abc") == "abc");      // true
console.log(Object("abc") === "abc");     // false

console.log({valueOf:() => "2"} == 2);   // true  -> object -> primitive 2
console.log({toString:() => "2"} == 2);  // true  -> object -> primitive 2 via toString

// string-to-number traps
console.log("  12 " == 12);   // true  -> whitespace trimmed, then numeric coercion
console.log("0x10" == 16);    // true  -> hexadecimal string converted to number 16
console.log("08" == 8);       // true  -> numeric coercion handles leading zero as decimal in modern JS
console.log("  " == 0);      // true  -> whitespace-only string coerces to 0
console.log("\n\t" == 0);    // true  -> whitespace-only string coerces to 0

// the infamous trio
console.log(null == undefined); // true
console.log(null == 0);        // false
console.log(undefined == 0);   // false

// typeof results (always strings)
console.log(typeof 123);            // "number"
console.log(typeof "abc");        // "string"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" -> historical bug
console.log(typeof Symbol("x"));  // "symbol"
console.log(typeof {});             // "object"
console.log(typeof []);             // "object"
console.log(typeof function(){});   // "function" -> special case

// Object.is - strictest of all
console.log(Object.is(0, -0));    // false -> distinguishes +0 and -0
console.log(Object.is(NaN, NaN)); // true  -> NaN equals NaN here
console.log(Object.is("foo", "foo")); // true
console.log(Object.is(1, 1));     // true

// quick interview cheats
console.log("== does type coercion, === does not");
console.log("null == undefined is true, but null == 0 is false");
console.log("NaN is not equal to anything, even itself");
console.log("typeof always returns a string");
console.log("Object.is is the strictest equality check");
console.log("Use === unless you explicitly want coercion");


console.log(5 != "5");  // false -> "5" coerces to number 5, then compared
console.log(5 !== "5"); // true  -> different types: number vs string