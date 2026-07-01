// CALLBACK HELL — Pyramid of Doom
// Each step waits for the previous step to finish before starting.
// So we put each step INSIDE the previous one. It keeps going right. That is the problem.

function openBrowser(callback) {
    console.log("1. Opening browser...");
    callback(); // done! now do the next thing
}

function goToWebsite(callback) {
    console.log("2. Going to website...");
    callback(); // done! now do the next thing
}

function login(callback) {
    console.log("3. Logging in...");
    callback(); // done! now do the next thing
}

function addToCart(callback) {
    console.log("4. Adding item to cart...");
    callback(); // done! now do the next thing
}

function placeOrder(callback) {
    console.log("5. Placing order...");
    callback(); // done! we are finished!
}

// See how each step goes MORE to the right?
// This is called the Pyramid of Doom — it looks like a staircase going right forever.
// Imagine doing this with 35 steps. It becomes impossible to read!

openBrowser(() => {           // step 1 starts here
    goToWebsite(() => {       // step 2 is INSIDE step 1
        login(() => {         // step 3 is INSIDE step 2
            addToCart(() => { // step 4 is INSIDE step 3
                placeOrder(() => {             // step 5 is INSIDE step 4
                    console.log("All done!"); // the very last thing we do
                });
            });
        });
    });
});
