/**
 * @param {number} n
 * @return {number}
 * 求丑数: 是只包含 质因子 2、3、5 的正整数。
 * 动态规划
 */
var nthUglyNumber = function (n) {
  const dp = [1];
  let i2 = 0,
    i3 = 0,
    i5 = 0;
  while (dp.length < n) {
    const next2 = dp[i2] * 2;
    const next3 = dp[i3] * 3;
    const next5 = dp[i5] * 5;
    const nextUgly = Math.min(next2, next3, next5);
    dp.push(nextUgly);
    if (nextUgly === next2) i2++;
    if (nextUgly === next3) i3++;
    if (nextUgly === next5) i5++;
  }
  return dp[n - 1];
};
