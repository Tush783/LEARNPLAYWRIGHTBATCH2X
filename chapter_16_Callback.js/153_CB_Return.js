// calculate does not do the math itself — it lets the callback do it and returns the result
function calculate(a, b, callback) {
    return callback(a, b);
}

// Named callback — passed by reference
function add(x, y) {
    return x + y;
}

// Passing named function "add" as the callback → calculate calls add(5,3) → returns 8
let result = calculate(5, 3, add);
console.log("Result:", result); // 8

// Passing an anonymous function as the callback → does subtraction inline
let sub = calculate(5, 3, function(x, y) {
    return x - y;
});
console.log("Result: " + sub); // 2
