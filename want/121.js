// 贪心算法

var maxProfit = function (prices) {
  let ans = 0;
  let min = prices[0];
  for (const price of prices) {
    ans = Math.max(ans, price - min);
    min = Math.min(min, price);
  }
  return ans;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
