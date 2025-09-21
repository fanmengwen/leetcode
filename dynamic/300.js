/**
 * @param {number[]} nums
 * @return {number}
 * 最长递增子序列
 * dp[i] 表示：以 nums[i] 这个元素结尾的最长递增子序列的长度。
 */
var lengthOfLIS = function (nums) {
  const dp = Array(nums.length).fill(1);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        //  如果 nums[i] 比 nums[j] 大，说明 nums[i] 可以接在后面
        // 更新 dp[i] 为 dp[j] + 1 和 dp[i] 自身的最大值
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log("🚀 ~ lengthOfLIS ~ dp:", dp);

  let res = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
