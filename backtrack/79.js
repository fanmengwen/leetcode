/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  function dfs(k, i, j) {
    // 先判断是否已匹配完成
    if (k === word.length) return true;

    // 越界判断
    if (i < 0 || i >= m || j < 0 || j >= n) return false;

    // 当前字符不匹配
    if (board[i][j] !== word[k]) return false;

    // 标记已访问
    const tmp = board[i][j];
    board[i][j] = 0; // 或者用 '#'

    // 继续匹配下一个字符
    const found =
      dfs(k + 1, i + 1, j) ||
      dfs(k + 1, i - 1, j) ||
      dfs(k + 1, i, j + 1) ||
      dfs(k + 1, i, j - 1);

    // 回溯复原
    board[i][j] = tmp;
    return found;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(0, i, j)) return true; // 从第0个字符开始匹配
    }
  }
  return false;
};

// 测试
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); // true

console.log(exist([["a", "a"]], "aaa")); // false（不能重复用同一格）
