/**
 * 考察快速排序-》快速选择
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  const target = nums.length - k;
  if (nums.length === 1) {
    return nums[0];
  }

  function partition(left, right) {
    const pivotValue = nums[right];
    let storeIndex = left;
    for (let i = left; i < right; i++) {
      if (nums[i] < pivotValue) {
        [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
        storeIndex++;
      }
    }

    [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];
    return storeIndex;
  }

  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const pivotIndex = partition(left, right);
    console.log("🚀 ~ findKthLargest ~ pivotIndex:", pivotIndex);
    // 如果枢轴的位置正好是我们要找的 k
    if (pivotIndex === target) {
      return nums[pivotIndex];
    }
    // 如果枢轴的位置比 k 大，说明我们要找的元素在左边
    else if (pivotIndex > target) {
      right = pivotIndex - 1;
    }
    // 如果枢轴的位置比 k 小，说明我们要找的元素在右边
    else {
      left = pivotIndex + 1;
    }
  }
};

console.log(findKthLargest([2, 1], 1));
