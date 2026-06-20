const user = {name1: "John", age:30, city: "NYC"};
// Destructuring = a shortcut to unpack values from an object into separate variables
// Instead of writing: const name1 = user.name1; const age = user.age;
// You can do it in one line:
// const {name1 , age} = user;
// console.log(name1);  // "John"
// console.log(age);    // 30

// Sometimes the object key name (name1) is not the name you want in your code
// So you rename it on the spot: objectKey : yourNewVariableName
const {name1: userName , age: userAge} = user;
console.log(userName);   // "John"  — stored as userName, not name1
console.log(userAge);    // 30      — stored as userAge, not age

// You can pick just ONE property you care about — no need to grab the whole object
const {age} = user;

// If the key doesn't exist in the object, the default value is used instead
// "country" is not in user, so country = "USA" (the fallback)
const {country = "USA"} = user
console.log(country);  // "USA"

// Nested destructuring — the object has objects inside objects
// Instead of writing: data.user.address.city
// You can unpack all levels at once in one line
const data = {
    user:
    {
        name: "John", address:
        {
            city: "NYC"
        }
    }
};

// Reading left to right: go into data → user → address → grab city
const {user: {address: {city} } } = data;
console.log(data.user.address.city);  // "NYC"