// ── Part 1: Callback WITHOUT parameters ──────────────────────────────────────
// greetTest does its job first, then calls the callback.
// It does NOT send any data to the callback — callback runs on its own.
function greetTest(name, callback) {
    console.log("Welcome, " + name); // step 1 — greetTest does this
    callback();                       // step 2 — now run the callback (nothing passed)
}

greetTest("Dev", function(){
    console.log("Let's start something!"); // gets no data, just runs
});
// Output:
// Welcome, Dev
// Let's start something!


// ── Part 2: Callback WITH parameters ─────────────────────────────────────────
// runTest figures out the result (status = "PASS").
// Then it passes that result INTO the callback so the callback can use it.
function runTest(testName, callback){
    let status = "PASS";           // runTest decides this
    callback(testName, status);    // sends both values to the callback
}

runTest("Login Test", function (name, result){
    console.log(name + "->" + result); // uses the data it received
});
// Output:
// Login Test->PASS


// Sync Callback – forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug);
});

console.log("Total bugs: " + bugs.length);
