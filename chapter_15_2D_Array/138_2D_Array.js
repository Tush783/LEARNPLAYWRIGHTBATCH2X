let a = [1,2,3,4,5];

// A 2D array is an array of arrays — like a table with rows and columns
// grid[row][column]  →  grid[0][0]=1, grid[0][1]=2, grid[1][0]=4 ...
let grid = [
    [1,2,3],   // row 0
    [4,5,6],   // row 1
    [7,8,9]    // row 2
];

// i = row number (0, 1, 2)
// j = column number inside that row (0, 1, 2)
// grid[i][j] = the value at that row and column
for(let i = 0; i<3; i++) {
    for(let j=0; j<3; j++)
    {
        console.log(grid[i][j]);
    }
    console.log("\n"); // blank line after each row for readability
}