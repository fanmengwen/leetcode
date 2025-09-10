var calculateGreaterElement = function (nums) {
  var n = nums.length;
  const ans = Array(nums.length);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      // 之前的小值都被遮住了，所以直接 pop
      stack.pop();
    }
    ans[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums[i]);
  }
  return ans;
};

// console.log(calculateGreaterElement([2, 1, 2, 4, 3]));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 进阶版本，逻辑不变，还是先求 nums2 的下一个最大数组
 */
var nextGreaterElement = function (nums1, nums2) {
  const nums2Stack = calculateGreaterElement(nums2);
  const res = new Array(nums1.length);

  // 以 nums1 为字典去查找
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i]);
    res[i] = nums2Stack[index];
  }
  return res;
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
