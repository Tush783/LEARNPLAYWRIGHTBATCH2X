let rows = 3;

for (let i = 1; i <= rows; i++) {       // outer loop → rows
    let line = "";

    // spaces
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }

    // stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += "*";
    }

    console.log(line);
}
