/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 *  移除这个数中的 k 位数字，使得剩下的数字最小
 * 单调递增栈 + 贪心
 * 从左到右遍历数字，如果发现当前数字比它左边的数字要小，那么它左边的那个数字就是一个“峰值”，应该被删掉。
 * 因为删掉一个高位的、较大的数字，换上一个较低位的、较小的数字，会让整个数值变小
 */
var removeKdigits = function (num, k) {
  if (num.length === 1) {
    return num;
  }

  const stack = [];
  stack.push(num[0]);

  for (let i = 1; i < num.length; i++) {
    const cur = num[i];

    // 小于堆顶， 说明堆顶是一个峰值，一直去掉，保证增
    while (cur < stack[stack.length - 1] && k !== 0) {
      stack.pop();
      k--;
    }
    stack.push(cur);
  }
  return Number(stack.join(""));
};
console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
