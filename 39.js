/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const path = [];
  function dfs(path, sum, startIndex) {
    if (sum === target) {
      res.push(path.slice());
      return;
    }
    if (sum > target) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      sum += candidates[i];
      dfs(path, sum, i); // 注意是从 I 开始，因为元素可以重复使用
      path.pop();
      sum -= candidates[i];
    }
  }
  dfs(path, 0, 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
