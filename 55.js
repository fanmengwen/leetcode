/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxLen = 0;
  let right = 0;
  if (nums.length === 1) {
    return true;
  }
  for (let i = 0; i <= right && i < nums.length; i++) {
    const cur = i + nums[i];
    maxLen = Math.max(maxLen, cur);
    right = Math.min(maxLen, nums.length);
  }
  return maxLen + 1 >= nums.length;
};

console.log(canJump([2, 0, 0]));
