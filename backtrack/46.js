/**
 * @param {number[]} nums
 * @return {number[][]}
 * 全排列： 不含重复数字的数组
 */
var permute = function (nums) {
  const used = {};
  const res = [];

  function dfs(path) {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }

    for (const num of nums) {
      if (used[num]) continue;
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }

  dfs([]);
  return res;
};

const a = permute([1, 2, 3]);

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 全排列 II： 含重复数字的数组
前提： nums 必须是排序过的， 
对于已排序的数组，在生成全排列要去重时，当要选择的当前元素 nums[i] 与前一个元素 nums[i-1] 相同时，
需要遵守“必须是前一个元素 nums[i-1] 已经被使用了 (vis[i-1] === true)，我们才能使用当前这个元素 nums[i]”的规则。
在 [1, 2, 2'] 中，规则就是：只有当 2 已经被使用了，我们才可以选择 2'
 */
var permuteUnique = function (nums) {
  const res = [];
  const vis = new Array(nums.length).fill(false);

  function dfs(path) {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      /*
      如果当前元素 nums[i] 与它前一个元素 nums[i-1] 相同，并且前一个元素 nums[i-1] 还没有被使用过，那么就跳过当前元素。
      */
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue;
      }

      path.push(num);
      vis[i] = true;
      dfs(path);
      path.pop();
      vis[i] = false;
    }
  }
  dfs([]);
  console.log("🚀 ~ permuteUnique ~ res:", res);
};
const b = permuteUnique([1, 1, 3]);
console.log(b);
