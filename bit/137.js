/**
 * @param {number[]} nums
 * @return {number}
 * 按位计算:所有数字的第 0 位相加的总和，对 3 取余数 (sum % 3)，结果一定等于那个唯一数字的第 0 位
 * 十进制整数有 32 位， 所以每一位都相加， sum / 3 = 只出现一次的位数
 */
var singleNumber = function (nums) {
  let ans = 0;
  // 整数有 32 位
  for (let i = 0; i < 32; i++) {
    let total = 0;
    for (let num of nums) {
      // num >> i :就是把原来在第 i 位的那个数字，正好移动到第 0 位（也就是最右边）的位置上
      // & 1 ， 只取得最后一位相加
      total += (num >> i) & 1;
    }
    // 如果总和不是 3 的倍数，说明目标数字在这一位上是 1
    if (total % 3 !== 0) {
      // 1 << i 相当于把 1 左移 i ,比如 100.
      // | 或运算，100 | 001 = 101， 相当于位数变成 1
      // 所以 这里 | (或) 运算来给 ans 的第 i 位赋值为 1。其他位置不变
      ans |= 1 << i;
    }
  }
  // 浏览器默认转换成十进制
  return ans;
};
console.log("🚀 ~ singleNumber ~ singleNumber:", singleNumber([2, 2, 4, 2]));
