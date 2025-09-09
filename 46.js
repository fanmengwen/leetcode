/**
 * @param {number[]} nums
 * @return {number[][]}
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
console.log(a);
