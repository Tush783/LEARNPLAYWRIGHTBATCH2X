//let is Block-Scoped
let x = "global";

if (true) {
    //TDZ for block-scoped "x" starts here
    //console.log(x); // ReferenceError: Cannot access 'x' before initialization

    let x = "block-scoped"; //TDZ ends
    console.log(x); // Output: "block-scoped"
}
console.log(x); // Output: "global"