/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *  来搜索 m x n 矩阵 matrix 中的一个目标值 target
 *  每行的元素从左到右升序排列。 每列的元素从上到下升序排列。
 *  思路，从右上角开始比对，如果太大了，i--, 缩小。如果小了， j++, 扩大
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
