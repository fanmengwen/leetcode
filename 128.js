/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let ans = 0;
  for (let i of set) {
    if (set.has(i - 1)) {
      continue;
    }
    let y = i + 1;
    while (set.has(y)) {
      y++;
    }

    ans = Math.max(ans, y - i);
  }
  return ans;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
