// Create a Promise that immediately resolves with the value 42
let p = new Promise(function (resolve, reject) {
    resolve(42); // Success case
});

// Use .then() to handle the resolved value
p.then(function (value) {
    console.log("Answer:", value); // Prints: Answer: 42
});


// Create a Promise that immediately rejects with an error message
let c = new Promise(function (resolve, reject) {
    reject("Something broke"); // Failure case
});

// Use .catch() to handle the rejected value (error)
c.catch(function (err) {
    console.log("Caught:", err); // Prints: Caught: Something broke
});

// Create a Promise that is already resolved with the value 5
let a = Promise.resolve(5);

// First .then() → takes the resolved value (5) and multiplies it by 10
a.then(function (val) {
  return val * 10; // returns 50
})

// Second .then() → receives the new value (50) and logs it
.then(function (val) {
  console.log("Result:", val); // Prints: Result: 50
});

Promise.resolve(1)
    .then(function(val){
        console.log(val);
        return val +1;
    })
    .then(function(val){
    console.log(val);
    return val +1;
    })
    .then(function(val){
    console.log(val);
    })


Promise.resolve("start")
    .then(function(val) {
        console.log(val);
        throw new Error("Broke at step2");
    }).then(function() {
        console.log("This will not run");
    })
    .catch(function (err) {
        console.log("Caught", err.message);
    });


// Create a Promise that is immediately rejected
Promise.reject("Test failed")
  // .then() → would run if the promise was resolved (not in this case)
  .then(function (data) {
    console.log("Data:", data);
  })
  // .catch() → runs because the promise was rejected
  .catch(function (err) {
    console.log("Error:", err); // Prints: Error: Test failed
  })
  // .finally() → always runs, whether resolved or rejected
  .finally(function () {
    console.log("Cleanup done"); // Prints: Cleanup done
  });


  // Promise that resolves successfully
Promise.resolve("Quick win").then(function (msg) {
    console.log(msg); // Prints: Quick win
});

// Promise that rejects with an error
Promise.reject("Quick loss").catch(function (msg) {
    console.log(msg); // Prints: Quick loss
});

// Three promises
let t1 = Promise.resolve("PASS"); // success
let t2 = Promise.reject("FAIL");  // failure
let t3 = Promise.resolve("PASS"); // success

// Run all promises together
Promise.all([t1, t2, t3])
  .then(function (r) { 
    console.log("All:", r); // Runs only if ALL succeed
  })
  .catch(function (err) { 
    console.log("Stopped:", err); // Runs if ANY fails
  });


  // Run multiple promises together and wait until all are settled
Promise.allSettled([
  Promise.resolve("API 200"),   // fulfilled
  Promise.reject("API 500"),    // rejected
  Promise.resolve("API 201")    // fulfilled
]).then(function (results) {
  
  // Loop through each result
  results.forEach(function (r) {
    // If fulfilled → take value, else → take reason
    let val = r.status === "fulfilled" ? r.value : r.reason;
    
    // Print status and value/reason
    console.log(r.status + " → " + val);
  });
});
