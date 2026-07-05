// simulates a slow API call that takes 1 second to respond
function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function (){
            resolve(name, "200 ok") // note: resolve only uses the first value ("name"), the second is ignored
        }, 1000);
    })
}

async function seqTest() {
    console.log("Starting of the test");
    let start = Date.now(); // remember the start time

    // each await waits for its own 1 second before moving to the next line
    // so these run ONE AFTER ANOTHER, not at the same time
    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    // 3 calls x ~1 second each = about 3000ms total, since they run sequentially
    console.log("Time: ~" + (Date.now() - start) + "ms");
}

seqTest();

