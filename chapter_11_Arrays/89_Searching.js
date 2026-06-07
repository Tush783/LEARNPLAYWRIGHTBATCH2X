let results = ["pass", "fail", "pass", "error", "fail"];

//indexOf - return first index or -1 if not found
console.log(results.indexOf("fail")); //1
console.log(results.indexOf("skip")); //-1

// lastIndexOf - Searches from the end
console.log(results.lastIndexOf("fail")); //4

//includes - returns boolean
console.log(results.includes("error")); //true
console.log(results.includes("skip")); //false

//find - returns first matching element
let nums = [10,25,30,45];
nums.find (x => x >20) //25

//find inder
nums.findIndex(n => n >20); //1,2,3

nums.findLast((n => n > 20)); //45