function retry(testName, maxRetries = 3, delay = 1000){ //Default Values if not passed in argument
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}`)
}

retry("Login Test"); // will take default value for other arguments
retry("Registration Test", 5, 2000);