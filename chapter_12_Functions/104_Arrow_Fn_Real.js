// ─────────────────────────────────────────────────────────────
// REAL-WORLD EXAMPLE: Validating HTTP Status Codes
// Same logic written in 3 different function styles
// ─────────────────────────────────────────────────────────────
// ─── STYLE 1: Regular Function Declaration ───────────────────
// Defined with the 'function' keyword
// Can be called BEFORE it is defined (hoisting)
function validateStatusCode(status) {
    // status 200–299 means the HTTP request was successful
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}

// Call the function
validateStatusCode(200); // Output: Request is fine!
validateStatusCode(404); // Output: (nothing — not a success code)

// ─── STYLE 2: Function Expression ────────────────────────────
// The function is stored inside a variable (const)
// Cannot be called BEFORE this line (no hoisting)
const validateStatusCode_Exp = function(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}
// Call using the variable name
validateStatusCode_Exp(201); // Output: Request is fine!

// ─── STYLE 3: Arrow Function ──────────────────────────────────
// Shorter syntax introduced in ES6
// Also stored in a variable — no hoisting
// Arrow functions do NOT have their own 'this' (important later)
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}
// Call using the variable name
validateStatusCode_Arrow(250); // Output: Request is fine!


// ─── SUMMARY ─────────────────────────────────────────────────
// | Style              | Hoisting | 'this' binding | Syntax   |
// |--------------------|----------|----------------|----------|
// | Function Declaration | YES    | Own            | Verbose  |
// | Function Expression  | NO     | Own            | Medium   |
// | Arrow Function       | NO     | Inherited      | Shortest |
