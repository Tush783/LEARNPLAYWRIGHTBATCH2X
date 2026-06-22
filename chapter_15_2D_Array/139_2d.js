// 1 row, 4 columns → size is 1×4
let matrix_2D = [
    [1,2,3,4]
];

// When rows and columns are equal in count it is called a GRID (square matrix)
// This grid has 3 rows and 3 columns → size is 3×3
let grid = [
    [10,20,30],  // row 0
    [40,50,60],  // row 1
    [70,80,90]   // row 2
];

console.log(grid[0][0]);  // 10 — row 0, column 0 (first element)
console.log(grid[0][2]);  // 30 — row 0, column 2 (last element of first row)

console.log(grid.length);    // 3 — number of rows
console.log(grid[0].length); // 3 — number of columns in row 0