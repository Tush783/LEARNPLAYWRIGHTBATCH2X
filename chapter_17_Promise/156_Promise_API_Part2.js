// Promise is rejected immediately with "500 Error"
let apiCall = new Promise(function(resolve, reject){
    reject("500 Error");
});

// .then runs only if resolved, so this is skipped
apiCall.then(function (data){
    console.log("Success or resolve");
}).catch(function(error){
    console.log(error); // .catch runs on reject and gets the error reason
})