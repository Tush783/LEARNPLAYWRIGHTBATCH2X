// ─────────────────────────────────────────────────────────────
// PURE FUNCTIONS
// A Pure Function always returns the same output for the same
// input and has NO side effects (doesn't touch anything outside)
// ─────────────────────────────────────────────────────────────

// ─── Simple EXPLANATION ───────────────────────────────────
// Imagine a magic calculator.
// Every time you press 2 + 3, it ALWAYS gives you 5.
// No matter what day it is, no matter who presses it.
// Same input → Same output. Always. That is a Pure Function.

// ─── PURE FUNCTION ✅ ─────────────────────────────────────────
// Same input always gives same output
// Does NOT touch anything outside itself
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 — always the same, every time!


// ─── IMPURE FUNCTION ❌ ───────────────────────────────────────
// Uses a variable from OUTSIDE the function
// So the answer can change — not reliable!
let bonus = 10;

function addWithBonus(a, b) {
    return a + b + bonus; // 'bonus' is outside — this makes it impure
}

console.log(addWithBonus(2, 3)); // 15
bonus = 99;
console.log(addWithBonus(2, 3)); // 104 — different answer! broken!


// ─── SUMMARY ─────────────────────────────────────────────────
// Pure Function   → same input = same output, no outside changes
// Impure Function → result can change, or it changes something outside

// Think of it like a vending machine:
// Press B2 → always get chips. No surprises. That is PURE.
