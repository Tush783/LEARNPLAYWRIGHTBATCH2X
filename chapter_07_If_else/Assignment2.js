//Question 2 — Test Case Pass/Fail Verdict
//Problem: Compare actual result with expected result and print test verdict.
//Sample Input/Output:
//Expected = "Login Successful"
//Actual = "Login Successful"
//Output : Test Passed

//Expected = "Login Successful"
//Actual = "Invalid Credentials"
//Output : Test Failed - Expected: Login Successful, Got: Invalid Credentials

let expected = "Login Successful";
let actual = "Login Successful";

if(expected === actual){
    console.log("✅Output : Test Passed");
}
else{
    console.log("❌Output : Test Failed - Expected: Login Successful, Got: Invalid Credentials");
}