/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function findMin(nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function binarySearch(nums, target) {
  console.log("🚀 ~ binarySearch ~ nums:", nums);
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
var search = function (nums, target) {
  const startIndex = findMin(nums);
  if (startIndex === 0) {
    return binarySearch(nums, target);
  } else if (nums[0] > target) {
    const res = binarySearch(nums.slice(startIndex, nums.length), target);
    return res === -1 ? res : res + startIndex;
  } else {
    return binarySearch(nums.slice(0, startIndex), target);
  }
};

console.log(search([3], 3));
