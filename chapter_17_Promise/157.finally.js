// apiCall is true, so the promise resolves; otherwise it would reject
let testRun = new Promise(function(resolve, reject){
   let apiCall = true;
    if(apiCall){
    resolve({"Status": "done"}) // success
    }else{
    reject("Assertion Failed"); // failure
    }
});

// .then runs since the promise resolved
testRun.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error); // .catch would run only if rejected
}).finally(function(){
    // .finally always runs, whether resolved or rejected
    console.log("I WILL BE EXECUTED ANYHOW!");
})