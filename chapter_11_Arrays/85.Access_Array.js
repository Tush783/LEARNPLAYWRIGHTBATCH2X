//Accessing and Modifying
let statuses = ["pass","fail","skip"];
console.log(statuses[0]);
console.log(statuses[1]);
console.log(statuses[2]);

console.log("---------------------------");
console.log(statuses.at(-1)); //at is needed when accessing from the back
console.log(statuses.at(-2));
console.log(statuses.at(-3));
console.log("---------------------------");

//Modify
statuses[1]= "blocked";
console.log(statuses);