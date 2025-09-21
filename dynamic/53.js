/**
 * @param {number[]} nums
 * @return {number}
 * 最大子数组之和，要求是连续的
 * 判断当前的和是否大于0， 大于0 ，后面就加上这个数
 *   小于0 ，则弃掉当前和，以当前数为最大值
 * 为什么看 sum 不是 num : 因为看前面的队伍 (sum) 对我（num）来说是“增益”还是“拖累”
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let ans = -Infinity;
  for (let num of nums) {
    // 正数就相加
    if (sum > 0) {
      sum += num;
      // 负数越加越小，所以直接不要之前的和，从当前数开始计算
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }

  return ans;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
