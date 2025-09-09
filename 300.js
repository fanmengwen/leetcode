/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = Array(nums.length).fill(1);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
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
