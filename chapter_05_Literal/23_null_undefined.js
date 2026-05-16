// null vs undefined in JavaScript

// undefined means a variable exists but has not been given a value yet.
let valueA;
console.log(valueA); // undefined

function noArgument(x) {
  console.log(x); // undefined if no argument is passed
}
noArgument();

// null means the programmer has intentionally set "no value".
let valueB = null;
console.log(valueB); // null

let selectedItem = null; // nothing is selected yet
console.log(selectedItem);

// Comparison examples
console.log(typeof valueA); // "undefined"
console.log(typeof valueB); // "object" (this is a known JavaScript quirk)

console.log(valueA === undefined); // true
console.log(valueB === null); // true
console.log(valueA == valueB); // true  (non-strict equality)
console.log(valueA === valueB); // false (different types)
