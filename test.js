/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];
  const path = Array(n * 2);

  function dfs(left, right) {
    if(right === n ) {
      push。、。。
    }
    if (left < n) {
      path[left + right] = "(";
      dfs(left + 1, right);
    }
    if(right )
  }

  dfs(0, 0);
  return ans;
};

console.log(generateParenthesis(3));
