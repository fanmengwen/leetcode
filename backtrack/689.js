/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean} 划分为k个相等的子集
 * 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 * 1. 先排序，这里要从大到小，因为先处理麻烦的
 * 2. sum 和一定等于 K 的倍数。
 * 2. 那么每个子集的和必然等于一个固定值 target = sum / k
 * 3. max(nums) > target，
 */
var canPartitionKSubsets = function (nums, k) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % k !== 0) {
    return false;
  }
  const target = sum / k; // 和已经找到

  nums.sort((a, b) => b - a);
  console.log("🚀 ~ canPartitionKSubsets ~ nums:", nums);
  const res = new Array(k).fill(0); // 每个和都要 = target

  function dfs(startIndex) {
    if (startIndex === nums.length) {
      return true; // 所有的都可以放进去
    }

    currentNum = nums[startIndex];
    for (let i = 0; i < k; i++) {
      // 循环每个桶，看能不能放进去, 如果超出，不放
      if (res[i] + currentNum > target) {
        continue;
      }

      res[i] += currentNum;

      // 特殊 startIndex + 1， startIndex 标记的是任务的进度或决策的阶段
      if (dfs(startIndex + 1)) {
        return true;
      }

      res[i] -= currentNum;
    }

    return false;
  }

  console.log("sds", res);

  return dfs(0);
};
console.log(
  "🚀 ~ canPartitionKSubsets:",
  canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)
);
