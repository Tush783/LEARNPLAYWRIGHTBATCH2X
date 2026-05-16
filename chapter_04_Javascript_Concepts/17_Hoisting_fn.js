function getUserStatus() {
    console.log(status_code); // Output: undefined, because of hoisting, the variable status is declared but not initialized.
    var status_code = "Active";
    console.log(status_code); // Output: Active, because the variable status is initialized with the value "Active".
}

getUserStatus();

//console.log(status_code); // This will cause an error, status_code is not defined outside the function.
//ReferenceError: status_code is not defined