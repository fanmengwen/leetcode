/**
 * @param {number[]} nums
 * @return {number}
 * 求最小跳跃的次数达到终点
 */
var jump = function (nums) {
  let cover = nums[0];
  let step = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    // 当前 step 所能达到的范围就是 end， 所以超出了就需要 step +1, 继续走
    if (i > end) {
      end = cover;
      step++;
    }
    cover = Math.max(cover, i + nums[i]);
  }
  return step;
};

console.log(jump([2, 3, 1, 1, 4]));

console.log(jump([1, 2, 1, 1, 1]));
