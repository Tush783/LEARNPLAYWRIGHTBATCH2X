if ("hello") console.log("String is truthy"); // can be in single line // hello is true
if (42) console.log("Number is truthy"); // can be in single line // 42 is true
if ({}) console.log("Empty object is truthy"); 
if ([]) console.log("Empty array is truthy"); 

if ("") console.log("Won't Print");
if (null) console.log("Won't Print");
if (undefined) console.log("Won't Print");
if (NaN) console.log("Won't Print"); 
if (0) console.log("Won't Print")


let name = undefined
if (name){
    console.log("Hi");
}
else{
    console.log("Bye"); //undefined is false condition
}

