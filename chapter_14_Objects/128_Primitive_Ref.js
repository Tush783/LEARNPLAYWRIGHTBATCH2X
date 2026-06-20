//Primitive vs Reference Types

// Primitives (number, string, boolean) are copied by VALUE
// b gets its own copy of 10 — changing b has no effect on a
let a =10;
let b = a;
b = 99;
console.log(a); // 10 — unchanged
console.log(b); // 99

//Object - Copied by referene, call by ref
//Referance - object, array , funtion
let obj1 = {val: 10};
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val); //obj 1 value also will be changed because it is copied by ref