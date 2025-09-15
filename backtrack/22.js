/**
 * @param {number} n
 * @return {string[]}
 * 括号的组成
 */
var generateParenthesis = function (n) {
  const ans = [];
  const path = Array(n * 2);

  function dfs(left, right) {
    if (right === n) {
      ans.push(path.join(""));
      console.log("🚀 ~ dfs ~ path:", path);
      return;
    }
    if (left < n) {
      path[left + right] = "(";
      console.log("🚀 ~ dfs ~ path:", path);
      dfs(left + 1, right);
    }
    if (right < left) {
      path[left + right] = ")";
      dfs(left, right + 1);
    }
  }

  dfs(0, 0);
  return ans;
};

console.log(generateParenthesis(3));
