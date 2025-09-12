function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;

  for (let i = 0; i < arr.length; i++) {
    preIndex = i - 1;
    let cur = arr[i];
    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex] = cur; // 当前的 i 的数值找到了对应的值
  }

  return arr;
}

// 每一轮循环，把当前「未排序区间」里最大的元素，冒泡 到区间的最后。
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    //下一轮，就不用再管最后那个元素了（它已经在正确位置上）
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        var temp = arr[j + 1]; // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 选择排序，每次选择最小值进行排序
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
