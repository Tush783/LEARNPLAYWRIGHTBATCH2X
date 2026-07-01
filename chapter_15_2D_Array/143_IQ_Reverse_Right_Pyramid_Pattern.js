// Print a reverse right pyramid — starts with the most stars, shrinks each row
// *****   ← i = 5, j runs 1..5 → 5 stars
// ****    ← i = 4, j runs 1..4 → 4 stars
// ***     ← i = 3, j runs 1..3 → 3 stars
// **      ← i = 2, j runs 1..2 → 2 stars
// *       ← i = 1, j runs 1..1 → 1 star

// Outer loop counts DOWN — i starts at max (5) and decreases each row
// Inner loop counts UP to i — so each row prints exactly i stars
for (let i = 5; i >= 1; i--) {       // outer loop → rows (5 down to 1)
    let line = "";
    for (let j = 1; j <= i; j++) {   // inner loop → stars (1 up to i)
        line += "*";
    }
    console.log(line);
}
