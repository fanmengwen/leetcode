/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;

  let i = 0,
    j = n - 1;

  while (i < m && j >= 0) {
    const ans = matrix[i][j];
    if (ans === target) {
      return true;
    }
    if (ans > target) {
      i--;
    } else {
      j++;
    }
  }
  return false;
};

console.log(searchMatrix([[1, 1]], 0));
