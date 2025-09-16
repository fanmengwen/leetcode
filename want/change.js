// 团子 2
// 微信抢红包策略
function splitMoney(m, n) {
  const minVal = 0.1;
  const maxVal = m / 2;

  // 先检查是否可分
  if (n * minVal > m || n * maxVal < m) {
    return "无法分配";
  }

  let result = [];
  let remaining = m;

  for (let i = 0; i < n - 1; i++) {
    // 每个人的最大上限，不能超过剩余的钱 - 其他人最小值
    const upper = Math.min(maxVal, remaining - (n - i - 1) * minVal);
    const lower = minVal;

    // 在 [lower, upper] 之间随机一个数
    const x = +(Math.random() * (upper - lower) + lower).toFixed(2);
    result.push(x);
    remaining -= x;
  }

  // 最后一个人拿剩下的
  result.push(+remaining.toFixed(2));

  return result;
}

// 示例
console.log(splitMoney(10, 4));
