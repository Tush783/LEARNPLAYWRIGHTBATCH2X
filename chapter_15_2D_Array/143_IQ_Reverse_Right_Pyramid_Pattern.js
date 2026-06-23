// *****

// ****

// ***

// **

// *
//Print reverse
for (let i = 5; i >= 1; i--) {       // outer loop → rows
    let line = "";
    for (let j = 1; j <= i; j++) {   // inner loop → stars
        line += "*";
    }
    console.log(line);
}
