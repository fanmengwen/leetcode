/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const pre = [];
  const back = [];
  const ans = [];

  pre[-1] = 1;
  back[nums.length] = 1;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      pre[i] = nums[i] * pre[i - 1];
    } else {
      pre[i] = nums[i];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      //   console.log("🚀 ~ productExceptSelf ~ nums:", i, nums[i]);

      back[i] = nums[i];
    } else {
      back[i] = nums[i] * back[i + 1];
    }

    ans[i] = pre[i - 1] * back[i + 1];
  }

  //   console.log("🚀 ~ productExceptSelf ~ pre:", back, pre);

  return ans;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
