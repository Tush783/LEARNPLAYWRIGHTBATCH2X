function cafe(item, callWhenTableisReady)
{
    console.log("Findin...1");
    console.log("Findin...2");
    console.log("Findin...3");
    callWhenTableisReady();
}

function callWhenTableisReady(){
    console.log("calling 8554236547");
}

cafe("burger", callWhenTableisReady);

cafe("Pizza", function(){
    console.log("own function");
})

cafe("cake", () => {
    console.log("arrow function");
})