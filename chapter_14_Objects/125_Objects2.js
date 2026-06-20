//Objects
//Key and value pair

let student1 = {name: "Amit", age: 65};        // age: 65 — use colon, not =
let student2 = {name: "Amit"};
let student3 = {name: "Amit", age: 87, phone: 9087656567};

//Key will not be in the double quotes
//Below key in double quotes is actually JSON.
let JSON_student4 = {"name": "Pramod", "age" : 87, "phone": 987535353}

let a = {status : "pass"};
console.log(a.status);      // dot notation → "pass"
console.log(a["status"]);   // bracket notation → "pass"

let a1 = {status : "pass"};
console.log(a1.status);

// Objects are assigned by reference, not by value
// b points to the same object as a — not a copy
let b = a ;
console.log(b.status);   // "pass"
b.status = "fail";       // modifies the shared object
console.log(a.status);   // "fail" — a is affected too
console.log(b.status);   // "fail"
