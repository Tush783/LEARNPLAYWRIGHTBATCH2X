// Print a centered proper pyramid (rows = 3):
//   *      ← i=1: spaces = 3-1 = 2,  stars = 2(1)-1 = 1
//  ***     ← i=2: spaces = 3-2 = 1,  stars = 2(2)-1 = 3
// *****    ← i=3: spaces = 3-3 = 0,  stars = 2(3)-1 = 5
//
// Key formulas:
//   spaces per row = rows - i        (decreases by 1 each row → pushes stars right)
//   stars  per row = 2 * i - 1       (odd numbers 1, 3, 5 ... → keeps pyramid centered)

let rows = 3;

for (let i = 1; i <= rows; i++) {           // outer loop → each row top to bottom
    let line = "";

    // leading spaces — pushes stars to the center
    for (let j = 1; j <= rows - i; j++) {   // j runs rows-i times (shrinks each row)
        line += " ";
    }

    // stars — always an odd count so the pyramid stays symmetric
    for (let k = 1; k <= 2 * i - 1; k++) { // formula 2i-1 gives 1, 3, 5 ...
        line += "*";
    }

    console.log(line);
}
