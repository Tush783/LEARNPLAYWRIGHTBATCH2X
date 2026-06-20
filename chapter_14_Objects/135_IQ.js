const obj = {a:1, b:2,c:3}

// Object.keys   → gives you all the KEYS   (the labels)   → [ 'a', 'b', 'c' ]
// Object.values → gives you all the VALUES (the data)     → [ 1, 2, 3 ]
// Object.entries→ gives you both together as pairs        → [ ['a',1], ['b',2], ['c',3] ]
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const user = {name: "John", age: "30"};

// for...in loop goes through every key in the object one by one
// key = "name" first, then key = "age"
// user[key] uses the key to fetch the matching value
for(const key in user) {
    console.log(`${key}: ${user[key]}`);  // name: John  →  age: 30
}


