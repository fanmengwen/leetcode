## 区间类问题

### 核心思想：排序 + 线性扫描

1. 排序。

2. 排好序的区间上进行一次遍历。

- 在遍历过程中，维护一个或多个状态（比如，一个“已合并”的结果列表，或者一个记录会议结束时间的最小堆）。

- 对于当前遍历到的区间 current，将它与你维护的状态（比如结果列表中的最后一个区间 last）进行比较。

  关键的比较：current.start 和 last.end 的大小关系决定了两个区间是否存在重叠。

### 模板代码 (JavaScript):

```js
/*
 * @param {number[][]} intervals - 区间数组，例如 [[1,3], [2,6], [8,10]]
 * @returns {number[][]} - 合并后的区间数组
 */
function mergeIntervalsTemplate(intervals) {
  // 处理边界情况
  if (intervals.length <= 1) {
    return intervals;
  }

  // 1. 核心第一步：按区间的起始点进行排序
  intervals.sort((a, b) => a[0] - b[0]);

  // 2. 初始化结果数组，放入第一个区间作为起点
  const result = [intervals[0]];

  // 3. 从第二个区间开始遍历
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    // 获取结果数组中最后一个区间
    const lastInterval = result[result.length - 1];

    // 4. 关键判断：当前区间的 start 是否小于等于最后一个区间的 end
    if (currentInterval[0] <= lastInterval[1]) {
      // 有重叠，进行合并
      // 更新最后一个区间的 end 为两者 end 的最大值
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    } else {
      // 无重叠，将当前区间作为一个新的独立区间加入结果
      result.push(currentInterval);
    }
  }

  // 5. 返回结果
  return result;
}

// 使用模板解决 LeetCode 56. 合并区间
const intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervalsTemplate(intervals1)); // 输出: [[1,6],[8,10],[15,18]]
```
