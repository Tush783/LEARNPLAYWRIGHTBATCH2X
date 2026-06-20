const user = { 
    name: "John",
    age: 30,
    email:"john@example.com"
}

console.log(user);
console.log(user.name);
console.log(user["age"]);

//Dynamic propety access
const key = "age";
console.log(key);
console.log(user.key);
console.log(user[key]);

//Adding/Modifying properties
user.city = "NYX";
user.age = 31;

console.log(user);
