/**
 * @param {number[]} nums
 * @return {number[][]}
 * 三数字之和，循环每一个num, 创建左右指针，查找是否和= 0；
 */
var threeSum = function (nums) {
  const orderNums = nums.sort((a, b) => a - b);
  // 先去重
  const ans = [];
  // 因为倒数3个元素不用算了
  for (let i = 0; i < nums.length - 2; i++) {
    // 因为都是正数，所以肯定 ！== 0
    if (orderNums[i] > 0) {
      break;
    }
    if (i > 0 && orderNums[i] === orderNums[i - 1]) continue; // 去重

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = orderNums[i] + orderNums[j] + orderNums[k];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        ans.push([orderNums[i], orderNums[j], orderNums[k]]);
        while (j < k && orderNums[j] === orderNums[j + 1]) j++; // 去重
        while (j < k && orderNums[k] === orderNums[k - 1]) k--; // 去重

        j++;
        k--;
      }
    }
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
