/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let cur = 0;
  let right = 0;
  let res = 0;
  if (nums.length === 1) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    right = Math.max(right, i + nums[i]);
    if (i === cur) {
      if (cur !== nums.length - 1) {
        res++;
        cur = right;
        if (cur >= nums.length - 1) {
          break;
        }
      } else {
        break;
      }
    }
  }
  return res;
};

console.log(jump([1, 2, 1, 1, 1]));
