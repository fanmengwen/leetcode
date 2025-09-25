/**
 * @param {number[][]} mat
 * @return {number[]}
 * 对角线遍历
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const result = new Array(m * n);
  let row = 0,
    col = 0;
  // direction = 1 表示右上, direction = -1 表示左下
  let direction = 1;
  for (let i = 0; i < m * n; i++) {
    result[i] = mat[row][col];
    if (direction === 1) {
      // 往右上移动
      let nextRow = row - 1;
      let nextCol = col + 1;

      if (nextRow < 0 || nextCol >= n) {
        direction = -1; // 转向
        // 优先判断是否撞到右墙
        if (col + 1 < n) {
          col++;
        } else {
          // 撞到右上角或上墙后撞到右墙
          row++;
        }
      } else {
        row = nextRow;
        col = nextCol;
      }
    } else {
      // 往左下移动
      let nextRow = row + 1;
      let nextCol = col - 1;
      // 检查是否撞到边界
      if (nextRow >= m || nextCol < 0) {
        direction = 1; // 转向
        // 优先判断是否撞到下墙
        if (row + 1 < m) {
          row++;
        } else {
          // 撞到左下角或左墙后撞到下墙
          col++;
        }
      } else {
        row = nextRow;
        col = nextCol;
      }
    }
  }
  return result;
};
console.log(
  "🚀 ~ findDiagonalOrder:",
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
