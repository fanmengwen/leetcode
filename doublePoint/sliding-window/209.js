/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * 长度最小的子数组， 滑动窗口
 */
var minSubArrayLen = function (target, nums) {
  let ans = Infinity;
  let sum = 0;
  let l = (r = 0);
  while (r < nums.length) {
    sum += nums[r];
    r++;

    while (sum >= target) {
      ans = Math.min(ans, r - l);
      sum -= nums[l];
      l++;
    }
  }
  return ans;
};
console.log(
  "🚀 ~ minSubArrayLen ~ minSubArrayLen:",
  minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
);
