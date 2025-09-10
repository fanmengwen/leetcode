/*
TOPK 的最大值，除了通过大顶堆排序实现，可以通过大小为 k小顶堆
*/
var findKthLargest = function (nums, k) {
  const heap = [];
  for (let i = 0; i < k; i++) {
    heap.push(nums[i]);
  }

  buildMinHeap(heap, k); // 简称一个小堆
  console.log("🚀 ~ findKthLargest ~ heap:", heap);

  for (let i = k; i < nums.length; i++) {
    const cur = heap[0];
    console.log("🚀 ~ findKthLargest ~ cur:", cur);
    if (cur < nums[i]) {
      // 求得是 topK 大，所以小的值直接替换掉
      heap[0] = nums[i];
      heapify(heap, k, 0);
    }
  }
  console.log("🚀 ~ findKthLargest ~ heap:", heap);
  return heap[0];
};

function buildMinHeap(heap, k) {
  if (k === 1) return;

  for (let i = Math.floor(k / 2); i >= 0; i--) {
    heapify(heap, k, i);
  }
}

function heapify(arr, k, i) {
  let minIndex = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < k && arr[left] < arr[minIndex]) {
    minIndex = left;
  }
  if (right < k && arr[right] < arr[minIndex]) {
    minIndex = right;
  }

  if (minIndex !== i) {
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    heapify(arr, k, minIndex);
  }
}

console.log(findKthLargest([4, 9, 3, 8, 5, 9], 3));
