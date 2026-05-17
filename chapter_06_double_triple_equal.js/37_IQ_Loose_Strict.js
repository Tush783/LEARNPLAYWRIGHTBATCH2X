console.log(0==""); // true // because of type coercion,
console.log(0=="0"); // true // because of type coercion, 
                            // it converts the string "0" to the number 0 before comparing

console.log(""=="0"); // false // because of type coercion, //Transitive Broken
                            // the empty string becomes 0, 
                            // but the string "0" stays "0" and is not coerced to 0 in this comparison