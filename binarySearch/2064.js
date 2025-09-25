/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 * 二分查找：每个商店放 x 个，，比如 11 放 x 个需要 ceil(11/x) 个商店才能放满， 同理 quantities里的其他项
 *    如果之和小于 n ，说明当前方案可行
 */
var minimizedMaximum = function (n, quantities) {
  // 1. 确定二分查找的范围
  let left = 1;
  // 上界可以是数组中的最大值，因为最差情况就是一个商店装下所有同类商品
  let right = Math.max(...quantities);

  // 检查在每个商店最多放 x 件商品的情况下，是否可行
  function check(n) {
    let storesNeeded = 0;
    for (const q of quantities) {
      storesNeeded += Math.ceil(q / x);
    }
    return storesNeeded <= n;
  }

  while (left < right) {
    // 二分查找，这里是另一种取中间的写法
    const mid = left + Math.floor((right - left) / 2);
    if (check(mid)) {
      // mid 是一个可行的解，尝试找到更小的解
      right = mid;
    } else {
      // mid 太小了，不可行，需要更大的 x
      left = mid + 1;
    }
  }
  return left;
};
console.log("🚀 ~ minimizedMaximum :", minimizedMaximum(6, [11, 6]));
