// Higher-Order Function — receives a function as argument
function runWithLogging(testFn, testName) {
    let result = testFn();   // calls whatever function was passed in
    return result;
}

// Regular functions
function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

// Passing functions as arguments
runWithLogging(loginTest, "Login Test");
runWithLogging(loginTestFAILED, "Dashboard Failed Test");