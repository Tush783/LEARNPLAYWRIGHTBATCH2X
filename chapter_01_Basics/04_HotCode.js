console.log("Hello");

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 10000; i++) { // Call the add function 10,000 times to trigger JIT compilation // It is hot code, and V8 will optimize it for better performance
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);