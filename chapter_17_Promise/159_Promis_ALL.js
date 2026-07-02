// Promise.resolve() makes an already-finished promise, like a task that's already done
let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

// Promise.all() waits for ALL the tasks in the list to finish, not one at a time
// it's like waiting for all your friends to arrive before starting the game
// if even ONE task fails, the whole thing fails
Promise.all([checkAuth,checkDB,checkCache]).then(function(result){
    console.log("all the checks are fine!"); // only runs when EVERYONE is done
})

// this time one friend (the 2nd task) says "I can't come!" (rejects)
// so Promise.all() gives up right away and skips .then()
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK"),
]).then(function(r){
    console.log(r); // this won't run, because one task failed
}).catch(function(error){
    console.log("Failed:", error) // this runs instead, showing the reason it failed
})


// Promise.allSettled() waits for ALL tasks too, but it never gives up early
// unlike Promise.all(), it doesn't care if some fail - it just tells you how EACH one went
Promise.allSettled([
    Promise.resolve("TEST A PASSED"),
    Promise.reject("TEST B FAILED"),
    Promise.resolve("TEST C PASSED"),
]).then(function(results){
    // results is a list with one entry per task, in the same order
    results.forEach(function(r,i){
        // r.status is "fulfilled" or "rejected"
        // r.value has the answer if it passed, r.reason has the answer if it failed
        console.log("Test" + (i+1) + ":", r.status, "-", r.value || r.reason)
    });
})