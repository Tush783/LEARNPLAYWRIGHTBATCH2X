//Scope in Funtions

let env = "staging"; //global scope

function setupConfig() {
    let timeoout = 3000; //local scope
    console.log(env); // can access global
    console.log(timeoout); //can access local
}

setupConfig();
console.log(env);
console.log(timeoout);