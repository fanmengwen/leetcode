/**
 * @param {number[][]} intervals
 * @return {number}
 * 求最小会议室
 */
var minMeetingRooms = function (intervals) {
  intervals.sort((sortA, sortB) => sortA[0] - sortB[0]);
  const room = [];
};

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
