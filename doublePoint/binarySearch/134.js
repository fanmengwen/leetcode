/**
 * @param {number[]} nums
 * @return {number}
 * 左右指针，二分查找
 */
var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nums[low];
};

console.log(findMin([11, 13, 15, 17]));
