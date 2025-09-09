/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const memo = Array(nums.length).fill(-1);
  function dfs(i) {
    if (i < 0) {
      return 0;
    }
    if (memo[i] !== -1) {
      return memo[i];
    }
    const res = Math.max(dfs(i - 1), dfs(i - 2) + nums[i]);
    memo[i] = res; // 记忆化：保存计算结果
    return res;
  }

  return dfs(nums.length - 1);
};

console.log(rob([1, 2, 3, 4]));
