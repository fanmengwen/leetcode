/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let k = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[k];
      nums[k] = nums[i];
      nums[i] = temp;
      console.log(nums);

      k++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
