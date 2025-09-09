/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function (nums) {
  let i;
  let hasChange = false;
  for (i = nums.length - 1; i >= 0; i--) {
    if (i + 1 < nums.length && nums[i] < nums[i + 1]) {
      // 找到第一个大于他的
      for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i] && !hasChange) {
          hasChange = true;
          [nums[j], nums[i]] = [nums[i], nums[j]];
          break;
        }
      }
      if (hasChange) {
        break;
      }
    }
  }
  console.log("🚀 ~ nextPermutation ~ i:", i);

  // 没找到， i = -1
  let left = i + 1,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
};
console.log(nextPermutation([1, 3, 2]));
