/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 下一个最大的，如果当前就是最大的，那么这个数组应该是单调递减
 * 所以第一步从后往前找到第一个不是降序的数字。
 * 再找到后面最后一个比他大的数字进行交换。
 */

var nextPermutation = function (nums) {
  let i;
  let hasChange = false;
  for (i = nums.length - 1; i >= 0; i--) {
    // 找第一个破坏降序趋势
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

  // 没找到， i = -1，说明当前是最大的，直接颠倒数组
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
