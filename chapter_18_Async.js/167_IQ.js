async function sayHello(){
    return "Hello, QA!";
}

sayHello().then(function(msg){
    console.log(msg);
});

async function testFlow() {
    let step1 = await Promise.resolve("Opened Browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked Login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified Dashboard");
    console.log(step3);
}

testFlow();