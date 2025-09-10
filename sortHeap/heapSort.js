// 堆排序，先生成最小堆，然后堆顶元素与末尾交换，然后对剩余元素进行向下堆化，一直循环，
function heapSort(nums) {
  const n = nums.length;

  // ---------- 下沉调整 ----------
  function heapify(n, i) {
    let smallest = i; // 默认当前节点最小
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // 当前节点跟左右子节点对比，找到最小的
    if (left < n && nums[left] < nums[smallest]) {
      smallest = left;
    }
    if (right < n && nums[right] < nums[smallest]) {
      smallest = right;
    }

    // 有最小的就交换
    if (smallest !== i) {
      [nums[i], nums[smallest]] = [nums[smallest], nums[i]];
      // 向下递归调整，万一下边还有更小的呢
      heapify(n, smallest);
    }
  }
  // 生成一个最小堆
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(n, i);
  }

  // 堆排序
  for (let i = n - 1; i >= 0; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    heapify(i, 0);
  }

  // 返回排序后的数组
  return nums;
}

console.log(heapSort([4, 6, 8, 5, 9]));
