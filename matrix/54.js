var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const total = m * n;
  const res = [];
  let x = 0,
    y = 0;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let dirIndex = 0;

  for (let i = 0; i < total; i++) {
    res.push(matrix[x][y]);
    matrix[x][y] = "xx"; // 标记为已访问

    let nextX = x + dirs[dirIndex][0];
    let nextY = y + dirs[dirIndex][1];

    if (
      nextX < 0 ||
      nextX >= m ||
      nextY < 0 ||
      nextY >= n ||
      matrix[nextX][nextY] === "xx"
    ) {
      dirIndex = (dirIndex + 1) % 4; // 换到下一个方向
    }

    // 4. 更新实际位置（为了下一次循环）
    x += dirs[dirIndex][0];
    y += dirs[dirIndex][1];
  }
  console.log(res);
};
console.log(
  "🚀 ~ spiralOrder :",
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
