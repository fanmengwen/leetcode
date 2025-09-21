/**
 * @param {number[]} nums
 * @return {number}
 * 决定偷第 i 间房： 不能偷 i - 1 家，max = dp(i-2) + i
 * 不偷第 i 间房, i 就不能偷: 第 i-1 间房偷不偷都可以，没有限制, max = dp[i-1]
 */
var rob = function (nums) {
  const dp = Array(nums.length);
  if (nums.length === 1) {
    return nums[1];
  }
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
};
console.log("🚀 ~ rob ~ rob:", rob([1, 2, 3, 1]));
