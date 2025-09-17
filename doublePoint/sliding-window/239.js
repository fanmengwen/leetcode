/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 返回 滑动窗口中的最大值 。单调减，如果新来的值很大， 就把其他小的踢走
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const deque = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    // 1. 维护队尾：保证队列的单调递减性
    // 如果队列不为空，且当前元素 >= 队尾元素，则将队尾元素弹出
    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);

    // 队列长度超出就不要第一个
    if (deque[0] <= i - k) {
      deque.shift();
      console.log("🚀 ~ maxSlidingWindow ~ deque:", deque);
    }
    // 4. 记录结果：当窗口形成后（即遍历过的元素数量达到 k），开始记录最大值
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  console.log("🚀 ~ maxSlidingWindow ~ res:", res);
};
console.log(
  "🚀 ~ maxSlidingWindow :",
  maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
);
