// simulate an API call using a Promise
let apiCall = new Promise(function(resolve,reject){
    resolve({
        status:200, body: "User data" // fake response data
    })
});

// .then gets the resolved value (response)
apiCall.then(function(response){
    console.log(response);
    console.log(response.status);
});

//.then runs only when the promise is resolved successfully.