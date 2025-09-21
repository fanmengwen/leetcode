/**
 * @param {number[]} nums
 * @return {number[]}
 * 和为 K 的连续子数组
 * 注意：连续，可以使用前缀和 。一个连续子数组 [i, j] 的和，等于 prefix_sum[j] - prefix_sum[i-1]
 * 利用上面的公式，就变成了： prefix_sum[j] - prefix_sum[i-1] = k
 * 公式变形：prefix_sum[i-1] = prefix_sum[j] - k
 *    位置 j 时，如果我们想找到一个以 j 结尾、和为 k 的子数组，
 *    我们只需要回头看，在 j 之前，值为 prefix_sum[j] - k 的前缀和出现过多少次
 */
var subarraySum = function (nums, k) {
  let count = 0;

  let prefix_sum = 0;
  const hash = new Map();
  hash.set(0, 1); // 和为0的前缀和”出现过1次
  for (let num of nums) {
    prefix_sum += num;

    //  寻找目标 target = prefix_sum - k
    target = prefix_sum - k;
    if (hash.has(target)) {
      count = count + hash.get(target);
    }

    hash.set(prefix_sum, (hash.get(prefix_sum) || 0) + 1);
  }

  return count;
};
console.log(subarraySum([1, 2, 3, -3, 1], 3));
