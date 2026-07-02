// create a Promise
let order = new Promise(function(resolve, reject){
    let foodready = true;
    if(foodready){
        resolve("Pizza is delivered. Food is ready.!"); // success
    }
    else{
        reject("Order cancelled because of rain."); // failure
    }
})

// prints the Promise, not the message inside it
console.log(order);