// Think of a Promise like a task card that says "I promise to finish this"
// this function's job is to open the browser
function openBrowser(){
    return new Promise(function(resolve){
        //CODE TO OPEN THE BROWSER
        resolve("open the browser"); // "I'm done!" message
    })
}


// this is the OLD way of doing it (using a callback instead of a promise)
// it's commented out (turned off) - just here to compare with the new way
// function OpenBrowser(callback){
//     setTimeout(function(){
//         console.log("STEP 01: CHROME BROWSER OPENED");
//         callback();
//     },500);
// }

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
openBrowser()
    .then(function(mdg) {
        console.log("STEP: 1", mdg); // show what happened in step 1
        return goToLogin(); // now start step 2
}).then(function(msg) {
        console.log("STEP: 2 ", msg); // show what happened in step 2
        return enterCredentials(); // now start step 3
}).then(function(msg) {
        console.log("STEP: 3 ", msg); // show what happened in step 3
        return clickLogin(); // now start step 4
}).catch(function(error){
    console.log("Error:", error); // if ANY step fails, this catches it
}).finally(function(){
    console.log("Done Execution!"); // this always runs at the very end
});
