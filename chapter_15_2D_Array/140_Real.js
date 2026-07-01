// Each row = one test case: [testName, result, statusCode]
let testMatrix = [
    ["login",    "pass", 200],   // row 0
    ["checkout", "fail", 404],   // row 1
    ["search",   "pass", 180]    // row 2
];

// How many test cases have we executed?  → testMatrix.length = 3
// How many test cases are passed?        → count rows where index[1] === "pass"
// What is the status code for the fail?  → testMatrix[1][2] = 404

// i = row (each test case), j = column (name / result / status code)
for(let i = 0; i < testMatrix.length; i++)
    for(let j = 0 ; j < testMatrix[i].length; j++) {  // .length needed — testMatrix[i] is an array
        console.log(testMatrix[i][j]);
    }

// Cleaner way to loop — for...of reads each row directly without needing i and j
// row = one full test case array e.g. ["login", "pass", 200]
// cell = each individual value inside that row e.g. "login", then "pass", then 200
for(let row of testMatrix) {
    for (let cell of row){
        process.stdout.write(cell + " ")  // print on the same line with a space (no newline)
    }
    console.log();  // move to the next line after each row is printed
}

/* forEach - NOT USED */
// ME HAVE BIG LIST OF LISTS (testMatrix).
// ME GO THROUGH EACH SMALL LIST (row = one test case).
//   INSIDE SMALL LIST, ME GO THROUGH EACH THING (cell = name, result, code).
//   ME PRINT THING. ME ADD DOT. ME NO GO NEW LINE YET.
// WHEN SMALL LIST DONE, ME BANG DRUM (console.log). NEW LINE. ME DO NEXT SMALL LIST.
testMatrix.forEach(row => {
  row.forEach(cell => process.stdout.write(cell + "."));
  console.log();
});
