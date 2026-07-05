// simulates a slow API call that takes 1 second to respond
function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function (){
            resolve(name, "200 ok") // note: resolve only uses the first value ("name"), the second is ignored
        }, 1000);
    })
}


async function parallelTest() {
    // all 3 calls start at the SAME TIME (not one after another like await alone)
    // await + Promise.all waits for ALL of them to finish, then unwraps the results into an array
    let [r1,r2,r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User account creation"),
        apiCall("Support API page")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);
    // since they ran together, total time is ~1 second, not ~3 seconds
}

parallelTest();