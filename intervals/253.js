/**
 * @param {number[][]} intervals
 * @return {number}
 *  安排最小数量的会议室， 合并区间
 */
var minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // 先排序
  const room = [];
  if (intervals.length <= 1) {
    return intervals.length;
  }
  room.push([intervals[0]]);

  for (let i = 1; i < intervals.length; i++) {
    const [startTime, _] = intervals[i];
    let f = false; // 判断有没有合适的会议分配

    for (let j = 0; j < room.length; j++) {
      const curRoom = room[j];
      const [_, lastEnd] = curRoom[curRoom.length - 1];
      if (lastEnd <= startTime) {
        room[j].push(intervals[i]);
        f = true; // 有合适的会议室，就分配给
        break;
      }
    }
    if (!f) {
      // 没有，新建一个会议室
      room.push([intervals[i]]);
    }
  }

  console.log("🚀 ~ minMeetingRooms ~ room:", room);
  return room.length;
};
console.log(
  minMeetingRooms([
    // [0, 30],
    // [5, 10],
    // [15, 20],
    [7, 10],
    [2, 4],
  ])
);
