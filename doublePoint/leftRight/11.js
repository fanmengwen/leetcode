/**
 * @param {number[]} height
 * @return {number}
 * 盛水最多的容器，左右指针，每次移动短板
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let ans = 0;
  while (left < right) {
    const front = height[i];
    const back = height[j];

    let cur = 0;
    if (front < back) {
      cur = front * (j - i); // 计算面积
      i++;
    } else {
      cur = back * (j - i);
      j--;
    }
    ans = Math.max(ans, cur);
  }
  return ans;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

/**
 * @param {string} s
 * @return {string}
 * 接雨水-困难。 42 
 * 当前水量 = min(左边最高墙, 右边最高墙) - 当前柱子高度
 * 双指针解法：在每一步移动指针时，都能确定其中一边的最高墙，从而计算出当前位置的蓄水量。
 *循环的每一步，我们都去看 height[left] 和 height[right] 哪个更矮。
      leftMax rightMax： 能挡住水的墙，不一定是紧邻的柱子，而是你视野所及的“远处的山峰”。
      这就是著名的“木桶效应”，木桶能装多少水，取决于最短的那块木板，而不是相邻的木板
 */
var trap = function (height) {
  let totalSum = 0;
  let left = 0,
    right = height.length - 1;
  let leftMax = height[0],
    rightMax = height[height.length - 1];
  while (left < right) {
    // 如果 height[left] 更矮，说明左边的“堤坝”潜力不足，右边足够高。所以左边的水位线 left_max 是决定当前蓄水量的瓶颈。
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      //  我们结算左边的水量，并把左指针 left 向内移动，去考察下一个位置。
      totalSum = totalSum + (leftMax - height[left]);
      left++;
    } else {
      // 如果 height[right] 更矮，说明右边的“堤坝”是瓶颈，我们结算右边的水量，并移动 right 指针。
      rightMax = Math.max(rightMax, height[right]);
      totalSum = totalSum + (rightMax - height[right]);

      right--;
    }
  }
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
