// Goal: print a right pyramid with n rows
// n=3 output:
// *
// **
// ***

let n = 3;

// i = current row number (1, 2, 3)
// each row prints exactly i stars
for(let i = 1; i <= n ; i++){
    let row = "";           // start with empty string for this row

    // j goes from 1 to i — so row 1 gets 1 star, row 2 gets 2 stars, etc.
    for(let j = 1; j <= i ; j++)
    {
        row += "*";         // glue one star onto the row string
    }
    console.log(row);       // print the full row e.g. "*", "**", "***"
}
