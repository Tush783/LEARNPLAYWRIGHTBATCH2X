// returns an already-resolved promise, simulating fetching a token from an API
function getToken(){
    return Promise.resolve("abc1234");
}

// this is exactly how Playwright's own API works under the hood
//Playwright
//await page.goto();

// "async" lets us use "await" inside this function
async function run(){
    // pauses here until getToken()'s promise resolves, then unwraps the value
    let token = await getToken();
    console.log(token);
}

run(); // calling an async function runs it right away

//Any function which returns the promise, we should have await in front of it.