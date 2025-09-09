/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function sortArr(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr.splice(arr.length - 1, 1);

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return sortArr(left).concat(pivot, sortArr(right));
}
var sortColors = function (nums) {
  return sortArr(nums);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
