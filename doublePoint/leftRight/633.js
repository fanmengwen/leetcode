/**
 * @param {number} c
 * @return {boolean}
 * 是否存在两个数平方之和是 c :双指针，从 0 开始, 左右指针
 */
var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  let res = false;
  while (left < right) {
    const sum = left * left + right * right;
    if (sum < c) {
      left++;
    } else if (sum > c) {
      right--;
    } else if (sum === c) {
      res = true;
      break;
    }
  }
  return res;
};
console.log("🚀 ~ judgeSquareSum ~ judgeSquareSum:", judgeSquareSum(3));
