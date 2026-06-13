let g_x = 10;

//Nested Scope | Blocked Scope
function outer() {
    let x =10;

    function inner() {
        let y = 20;
        console.log(x);
    }
    inner();
    console.log(y);
}