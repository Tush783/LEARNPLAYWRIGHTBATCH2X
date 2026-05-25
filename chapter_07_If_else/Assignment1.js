/*Question 1 — HTTP Status Code Categorizer
Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid*/

httpCode = 404;

if(httpCode >= 200 && httpCode <=299){
    console.log("Input : " +httpCode );
    console.log("Output : Success");
}

else if(httpCode >= 300 && httpCode <=399){
    console.log("Input : " +httpCode );
    console.log("Output : Redirection");
}

else if(httpCode >= 400 && httpCode <=499){
    console.log("Input : " +httpCode );
    console.log("Output : Client Error");
}

else if(httpCode >= 500 && httpCode <=599){
    console.log("Input : " +httpCode );
    console.log("Output : Server Error");
}
else{
    console.log("Input : " +httpCode );
    console.log("Invalid");
}
