/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const ans = [];
  intervals.sort((a, b) => a[0] - b[0]);
  console.log("🚀 ~ merge ~ intervals:", intervals);

  for (let i = 0; i < intervals.length; i++) {
    let p = ans.length;

    console.log(ans, intervals[i]);
    if (p && ans[p - 1][1] >= intervals[i][0]) {
      ans[p - 1][1] = Math.max(intervals[i][1], ans[p - 1][1]);
    } else {
      ans.push(intervals[i]);
    }
  }

  return ans;
};
console.log(
  merge([
    [1, 3],
    [0, 2],
    [2, 3],
    [4, 6],
    [4, 5],
    [5, 5],
    [0, 2],
    [3, 3],
  ])
);
// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
