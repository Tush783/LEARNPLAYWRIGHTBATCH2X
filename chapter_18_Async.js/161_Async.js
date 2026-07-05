// "async" lets us use "await" inside this function to pause until a promise finishes
async function testapi() {
    try{
        // "await" pauses here and waits for the promise to settle
        // this promise rejects, so it jumps straight to the catch block below
        let result = await Promise.reject("503 REJECT");
    }
    catch(error){
        // catches the rejected value from the await above
        console.log('Error',error);
    }
    finally{
        // always runs, whether it succeeded or failed
        console.log("Clean up!");
    }
}

testapi(); // calling an async function runs it right away