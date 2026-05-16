console.log(score); //ReferenceError: Cannot access 'score' before initialization
let score =100;

{
    // TDZ for score starts here
    //console.log(score); //ReferenceError: Cannot access 'score' before initialization
    //score = 200; //ReferenceError
    //typeof score; //ReferenceError: Cannot access 'score' before initialization
    // TDZ for score ends here
    let score = 200;
    console.log(score); //Output: 200
                       // because the variable score is declared and initialized with the value 200 inside the block scope. 
}
