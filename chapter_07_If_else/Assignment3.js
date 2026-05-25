/*Question 3 — Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score */

let impactScore = 10;

if(impactScore >= 1 && impactScore <= 3){
    console.log("Input : " +impactScore);
    console.log("Output: Severity: Low");
}
else if(impactScore >= 4 && impactScore <= 6){
    console.log("Input : " +impactScore);
    console.log("Output: Severity: Medium");
}
else if(impactScore >= 7 && impactScore <= 8){
    console.log("Input : " +impactScore);
    console.log("Output: Severity: High");
}
else if(impactScore >= 9 && impactScore <= 10){
    console.log("Input : " +impactScore);
    console.log("Output: Severity: Critical - Block Release");
}
else{
    console.log("Invalid score");
}