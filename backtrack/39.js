/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 组合总数，
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
      return; // 这个分支已经超标了，没必要继续，这步叫“剪枝”
    }
    //遍历选择列表，并进行递归，下一次只能选择当前数字或排在它后面的数字
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      sum += candidates[i];
      dfs(path, sum, i); // 注意是从 I 开始，因为元素可以重复使用, 如果一个元素不能重复使用，那么下一次递归的起始索引通常是 i + 1
      path.pop();
      sum -= candidates[i];
    }
  }
  dfs(path, 0, 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
