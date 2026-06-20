// ─── let vs const with Objects ───────────────────────────────────────────────

// LET — you can replace the whole object with a brand new one
let userLet = { name: "John", age: 30 };
userLet = { name: "Amit", age: 25 };   // ✅ allowed — let lets you swap the box
console.log(userLet);                   // { name: 'Amit', age: 25 }

// CONST — you CANNOT replace the whole object, but you CAN change what's inside
const userConst = { name: "John", age: 30 };
// userConst = { name: "Amit" };        // ❌ Error — cannot replace a const object
userConst.name = "Amit";               // ✅ allowed — changing a property inside is fine
userConst.age = 25;                    // ✅ allowed
console.log(userConst);                // { name: 'Amit', age: 25 }


// ─── When to use const ───────────────────────────────────────────────────────

// Use CONST when the object itself should always stay the same "box"
// (even if the contents change)

// Example 1 — test config that should never be replaced by accident
const config = {
    browser: "Chrome",
    timeout: 5000
};
config.timeout = 3000;  // ✅ updating a setting — totally fine
// config = {};         // ❌ you don't want someone wiping out the whole config

// Example 2 — user session data
const session = {
    token: "abc123",
    role: "admin"
};
session.role = "viewer";  // ✅ role can change during the session
// session = null;         // ❌ but you never want to lose the session object itself


// ─── Simple rule to remember ─────────────────────────────────────────────────
// const = the BOX is locked, but the ITEMS inside can change
// let   = the BOX itself can be swapped out for a new one
//
// In real projects, always start with const.
// Only switch to let if you actually need to replace the whole object.
