function outer(){
    let message = "hello"
    console.log("OUTER CALLED!");
    function inner(){
        console.log(message);
    }
    return inner;
}

let fn_inner = outer();
fn_inner();


// function counter() {
//     let count = 0;           // private variable!
    
//     return function() {
//         count++;
//         console.log(count);
//     }
// }

// let increment = counter();
// increment(); // 1
// increment(); // 2
// increment(); // 3