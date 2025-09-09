/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const ingree = new Array(numCourses).fill(0);

  // 建图
  for (let [cur, pre] of prerequisites) {
    graph[pre].push(cur);
    ingree[cur]++;
  }

  // 入度为 0 的先入队
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (ingree[i] === 0) queue.push(i);
  }

  let learned = 0;
  while (queue.length) {
    const course = queue.shift();

    learned++;
    for (let next of graph[course]) {
      ingree[next]--;
      if (ingree[next] === 0) queue.push(next);
    }
  }
  return learned === numCourses;
};

console.log(canFinish(2, [[1, 0]])); // true
