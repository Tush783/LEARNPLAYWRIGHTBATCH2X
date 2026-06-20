// ─── 1. OBJECT LITERAL SYNTAX ───────────────────────────────────────────────
// Simplest way to create an object using curly braces {}
// Format: { key: value, key: value }

let emptyObj = {};                          // empty object

let person = {
    name: "Pramod",                         // string value
    age: 30,                                // number value
    isActive: true,                         // boolean value
    address: {                              // nested object
        city: "Pune",
        country: "India"
    },
    hobbies: ["reading", "coding"]          // array as value
};

// ─── 2. ACCESSING PROPERTIES ─────────────────────────────────────────────────

// Dot notation (most common)
console.log(person.name);                   // Pramod
console.log(person.address.city);           // Pune

// Bracket notation (use when key has spaces or is dynamic)
console.log(person["age"]);                 // 30
console.log(person["address"]["country"]);  // India

let key = "isActive";
console.log(person[key]);                   // true  (dynamic key access)

// ─── 3. ADDING / UPDATING / DELETING PROPERTIES ──────────────────────────────

person.email = "pramod@example.com";        // add new property
person.age = 31;                            // update existing property
delete person.isActive;                     // delete a property

console.log(person.email);                  // pramod@example.com
console.log(person.age);                    // 31
console.log(person.isActive);               // undefined (deleted)

// ─── 4. METHODS (functions inside an object) ──────────────────────────────────

let student = {
    name: "Tushar",
    score: 95,
    greet: function () {                    // method using function keyword
        console.log("Hello, I am " + this.name);
    },
    getScore() {                            // shorthand method syntax (ES6)
        return this.score;
    }
};

student.greet();                            // Hello, I am Tushar
console.log(student.getScore());            // 95

// ─── 5. THE `this` KEYWORD ───────────────────────────────────────────────────
// Inside a method, `this` refers to the object that owns the method

let car = {
    brand: "Toyota",
    model: "Camry",
    describe() {
        console.log(`${this.brand} ${this.model}`); // Toyota Camry
    }
};

car.describe();

// ─── 6. OBJECT CONSTRUCTOR FUNCTION ──────────────────────────────────────────
// Use `new` keyword + function to create multiple objects of the same shape

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
    this.speak = function () {
        console.log(`${this.name} says ${this.sound}`);
    };
}

let dog = new Animal("Dog", "Woof");
let cat = new Animal("Cat", "Meow");

dog.speak();                                // Dog says Woof
cat.speak();                                // Cat says Meow

// ─── 7. Object.keys / Object.values / Object.entries ─────────────────────────

let laptop = { brand: "Dell", ram: 16, ssd: 512 };

console.log(Object.keys(laptop));           // [ 'brand', 'ram', 'ssd' ]
console.log(Object.values(laptop));         // [ 'Dell', 16, 512 ]
console.log(Object.entries(laptop));        // [ ['brand','Dell'], ['ram',16], ['ssd',512] ]

// ─── 8. SPREAD OPERATOR WITH OBJECTS (ES6) ────────────────────────────────────

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let merged = { ...obj1, ...obj2 };          // merge two objects
console.log(merged);                        // { a: 1, b: 2, c: 3, d: 4 }

let clone = { ...obj1 };                    // shallow copy
console.log(clone);                         // { a: 1, b: 2 }

// ─── 9. DESTRUCTURING ────────────────────────────────────────────────────────

let { name, age } = person;                 // extract properties into variables
console.log(name, age);                     // Pramod 31

let { city, country } = person.address;
console.log(city, country);                 // Pune India

// Rename while destructuring
let { name: personName } = person;
console.log(personName);                    // Pramod

// ─── 10. SHORTHAND PROPERTY NAMES (ES6) ──────────────────────────────────────

let username = "Raghu";
let score = 100;

// Old way:  { username: username, score: score }
let profile = { username, score };          // shorthand — key = variable name
console.log(profile);                       // { username: 'Raghu', score: 100 }

// ─── 11. COMPUTED PROPERTY NAMES (ES6) ───────────────────────────────────────

let fieldName = "email";
let user = {
    name: "Raj",
    [fieldName]: "raj@example.com"          // dynamic key using []
};
console.log(user.email);                    // raj@example.com

// ─── 12. CHECKING IF PROPERTY EXISTS ──────────────────────────────────────────

console.log("name" in person);              // true
console.log("salary" in person);            // false
console.log(person.hasOwnProperty("age")); // true
