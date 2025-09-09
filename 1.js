/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i];
    if (map.has(targetNum)) {
      return [i, map.get(targetNum)];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([3, 2, 4], 6));
