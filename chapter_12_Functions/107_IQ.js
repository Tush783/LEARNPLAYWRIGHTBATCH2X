function runTest(name, status, duration){
    return `${name}: ${status}: (${duration}ms)`;
}

console.log(runTest("Login","Pass",320));

let r = runTest("Login","Pass",320);
console.log(r);