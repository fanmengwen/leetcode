// 空间复杂度最小，所以是归并排序
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  const middle = nums.length / 2;
  const leftArray = nums.slice(0, middle);
  const rightArray = nums.slice(middle, nums.length);

  return mergeArray(sortArray(leftArray), sortArray(rightArray));
};

// 合并两个排序的数组就简单了
function mergeArray(left, right) {
  const m = left.length;
  const n = right.length;

  let i = 0,
    j = 0;

  const ans = [];
  while (i < m && j < n) {
    if (left[i] < right[j]) {
      ans.push(left[i]);
      i++;
    } else {
      ans.push(right[j]);
      j++;
    }
  }

  while (i < m) {
    ans.push(left[i++]);
  }
  while (j < n) {
    ans.push(right[j++]);
  }

  return ans;
}
console.log(sortArray([5, 2, 3, 1, 5]));
