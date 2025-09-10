/*
前 K 个高频元素, 除了用桶实现，这里用堆，
 实现与 215 一样， 只不过比较的是频率

*/

var topKFrequent = function (nums, k) {
  const heap = [];
  const map = new Map(); // 创建频率的哈希表
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  if (map.size < k) {
    return [...map.keys()];
  }

  // 开始构建小堆

  let i = 0;
  map.forEach((val, key) => {
    if (i < k) {
      heap.push(val); // 建立堆
      if (i === k - 1) {
        buildMinHeap(heap, k); // 简称一个小堆
      }
    } else {
      // 按照大小插入, 这里是取频率
      const cur = map.get(heap[0]);
      if (cur < val) {
        // 求得是 topK 大，所以小的值直接替换掉
        heap[0] = key;
        heapify(heap, k, 0);
      }
      i++;
    }
  });

  return heap[0];
};
console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3], 2));
