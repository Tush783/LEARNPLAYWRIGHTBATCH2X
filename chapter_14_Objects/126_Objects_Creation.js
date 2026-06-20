// Two objects with identical content are not equal — each is a distinct reference in memory
let c = { status : "pass"};
let d = { status : "pass"};

console.log(c);
console.log(d);

// === compares references, not values, so c !== d even though they look the same
if (c === d){
    console.log("true");
}
    else{
        console.log("false");
}

// b points to the same object as c, so mutating b also mutates c
let b=c;
b.status = "fail"
// b === c is true because they reference the same object
if (b === c){
    console.log("true");
}
    else{
        console.log("false");
}