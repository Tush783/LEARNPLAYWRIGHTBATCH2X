console.log (null >= 0); // true  -> null coerces to 0, so it's 0 >= 0 which is true
console.log (null > 0);  // false -> null coerces to 0, so it's 0 > 0 which is false
console.log (null == 0); // false -> null only equals undefined in loose equality, it does not equal 0
console.log (null === 0); // false -> different types: object vs number

//Nullish Operator

let amul = null;
let milk_required = amul ?? "Nandini Milk"; // ?? --> is checking of the null 
                                            // Single ? will also work in mordern typescript
console.log(milk_required); 
