// Synchronous
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Asynchronous
console.log("Start");
setTimeout(() => {
  console.log("Async task done!");
}, 2000);
console.log("End");
