// number == string
console.log(1 == "1"); // true // because of type coercion, 
                                // it converts the string "1" to the number 1 before comparing
// number === string
console.log(1 === "1"); // false // because it checks for both value and type equality,
                                // the number 1 is not the same type as the string "1"

console.log(0 == false); // true // because of type coercion,
console.log(0 === false); // false // because it checks for both value and type equality,
                                // the number 0 is not the same type as the boolean false

console.log(null == undefined); // true // because of type coercion,
console.log(null === undefined); // false // because it checks for both value and type equality,
                                // null and undefined are different types

console.log(0 == ""); // true // because of type coercion,
console.log(0 === ""); // false // because it checks for both value and type equality,
                                // the number 0 is not the same type as the empty string ""