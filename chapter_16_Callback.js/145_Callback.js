// A normal function — will be passed as a callback later
function print(){
    console.log("Normal Function");
}

// placeOrder accepts an item name and a callback
// After placing the order it calls the callback — "hey, order is placed, now YOU do your thing"
function placeOrder(item , callback){
    console.log("Hi , Your order is placed " +item);
    callback();  // execute whatever function was passed in
}

// Way 1 — anonymous function passed directly as the callback
placeOrder("Burger", function () {
    console.log("Hi where is the order?");
})

// Way 2 — named function (print) passed as the callback
// no () here — we pass the reference, not the result of calling print
placeOrder("Pizza", print);


// Way 3 — arrow function, shorter syntax for the same anonymous function
// () =>  replaces  function ()  — no difference in behavior here, just cleaner to write
placeOrder("cake", () => {
    console.log("Arrow Function");
})