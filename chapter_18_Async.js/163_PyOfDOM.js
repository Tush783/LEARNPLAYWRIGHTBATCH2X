// Think of a Promise like a task card that says "I promise to finish this"
// this function's job is to open the browser
function openBrowser(){
    return new Promise(function(resolve){
        //CODE TO OPEN THE BROWSER
        resolve("open the browser"); // "I'm done!" message
    })
}

// this function's job is to go to the login page
function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login page loaded"); // "I'm done!" message
    });
}

// this function's job is to type the username and password
function enterCredentials(){
    return new Promise(function(resolve){
        resolve("Credentials entered"); // "I'm done!" message
    });
}

// this function's job is to click the login button
function clickLogin(){
    return new Promise(function(resolve){
        resolve("Login button clicked"); // "I'm done!" message
    });
}

// Now we do the steps ONE AFTER ANOTHER, like a line of dominoes falling
// each .then() waits for the step before it to finish before starting
// openBrowser()
//     .then(function(mdg) {
//         console.log("STEP: 1", mdg); // show what happened in step 1
//         return goToLogin(); // now start step 2
// }).then(function(msg) {
//         console.log("STEP: 2 ", msg); // show what happened in step 2
//         return enterCredentials(); // now start step 3
// }).then(function(msg) {
//         console.log("STEP: 3 ", msg); // show what happened in step 3
//         return clickLogin(); // now start step 4
// }).catch(function(error){
//     console.log("Error:", error); // if ANY step fails, this catches it
// }).finally(function(){
//     console.log("Done Execution!"); // this always runs at the very end
// });

async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log("STEP 1: ",msg1);
    let msg2 = await goToLogin();
    console.log("STEP 2: ",msg2);
    let msg3 = enterCredentials();
    console.log("STEP 3: ",msg3);
    let msg4 = clickLogin();
    console.log("STEP 4: ",msg4);
}

runTheE2E();