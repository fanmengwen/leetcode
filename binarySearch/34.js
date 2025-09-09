/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 两次二分查找，分别获得第一个下标和最后一个下标

var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  const ans = nums.length;

  let first = -1,
    last = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      first = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      last = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return [first, last];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
