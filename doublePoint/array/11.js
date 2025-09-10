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
