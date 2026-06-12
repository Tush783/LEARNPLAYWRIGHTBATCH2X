let a = [1,2];
let b = [3,4];

let c = a.concat(b);
console.log(c);

//Spread
let d = [...a,...b];
console.log(d);

//JOIN
let s = ["PASS","FAIL","SKIP"].join("");
console.log(s);
let st = ["PASS","FAIL","SKIP"].join("-");
console.log(st);