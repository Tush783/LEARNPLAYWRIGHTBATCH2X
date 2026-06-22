// 3 students. Each student has 3 test scores.
let scores = [
    [83,44,65], // student 0 → total: 192
    [60,55,70], // student 1 → total: 185
    [95,88,92]  // student 2 → total: 275
];

// .map() goes through each student (row) one by one
// .reduce() adds up all scores in that row → a + b
//   a = running total, b = next number
//   starts at 0 (the second argument)
// result: one total per student → [192, 185, 275]
let rowSums = scores.map(row => row.reduce((a,b)=> a+b, 0));
console.log(rowSums);


// 3 test suites. Each suite has 3 test results inside it.
let suitesResults = [
    ["login-pass",    "register-pass", "logout-pass"],   // suite 0 — all pass
    ["search-pass",   "filter-fail",   "sort-pass"],     // suite 1 — one fail
    ["checkout-fail", "payment-fail",  "confirm-pass"]   // suite 2 — two fails
];

// Goal: find and print only the tests that failed
// i = which suite (row), j = which test inside that suite (column)
// .includes("fail") checks if the word "fail" exists in the test result string
for(let i = 0 ; i < suitesResults.length; i++){
    for (let j=0; j < suitesResults[i].length; j++){
        if(suitesResults[i][j].includes("fail")){
            console.log(suitesResults[i][j]); // prints: filter-fail, checkout-fail, payment-fail
        }
    }
}