/**
 * @param {number[]} nums
 * @return {number}
 * 原地去重，快慢指针
 */
var removeDuplicates = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
    right++;
  }

  return left + 1;
};
