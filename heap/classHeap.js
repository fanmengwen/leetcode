class Heap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // 向上堆化
  heapifyUp() {
    let index = this.heap.length - 1;
    // console.log("🚀 ~ Heap ~ heapifyUp ~ index:", index, this.heap);
    let parentIndex = Math.floor((index - 1) / 2);
    // console.log("🚀 ~ Heap ~ heapifyUp ~ parentIndex:", parentIndex);

    while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // 向下堆化
  heapifyDown() {
    let index = 0;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallerIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[index]
      ) {
        smallerIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[index]
      ) {
        smallerIndex = rightChildIndex;
      }

      if (smallerIndex !== index) {
        this.swap(index, smallerIndex);
        index = smallerIndex;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

// 求 TOPK 最大就维护一个最小堆（长度 = K），这样每次跟堆顶比较
function topKmax(nums, k) {
  const heap = new Heap();
  for (let i = 0; i < nums.length; i++) {
    // 没超过k个，直接插入
    if (heap.size() < k) {
      heap.insert(nums[i]);
    } else if (nums[i] > heap.peek()) {
      // 超过k个，如果比堆顶大，则替换堆顶，
      heap.pop();
      heap.insert(nums[i]);
      console.log("🚀 ~ topKmax ~ heap:", heap);
    }
  }

  return heap.heap;
}

console.log(topKmax([4, 6, 8, 5, 9], 3));
