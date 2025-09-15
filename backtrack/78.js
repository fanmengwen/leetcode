/**
 * @param {number[]} nums
 * @return {number[][]}
 * 所有可能的子集
 */
var subsets = function (nums) {
  const len = nums.length;
  const res = [];
  const path = []; // 单个结果

  function dfs(startIndex) {
    res.push(path.slice());
    if (startIndex >= len) {
      return;
    }

    for (let i = startIndex; i < len; i++) {
      path.push(nums[i]);
      dfs(i + 1);
      path.pop(nums[i]);
    }
  }
  dfs(0);
  return res;
};

console.log(subsets([1, 2, 3]));
