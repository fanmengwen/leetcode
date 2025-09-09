/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j > 0) {
        grid[i][j] = (grid[i][j - 1] || 0) + grid[i][j];
      } else if (j === 0 && i > 0) {
        grid[i][j] = (grid[i - 1][j] || 0) + grid[i][j];
      } else if (i > 0 && j > 0) {
        const small = Math.min(grid[i][j - 1], grid[i - 1][j]);
        grid[i][j] = small + grid[i][j];
      }
    }
  }

  return grid[m - 1][n - 1];
};

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
