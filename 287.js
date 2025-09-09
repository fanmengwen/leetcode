/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const newNums = nums.sort((a, b) => a - b);

  for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i - 1]) {
      return nums[i];
    }
  }
};
console.log(findDuplicate([1, 1]));
