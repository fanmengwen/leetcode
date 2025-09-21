// 左右指针
function collisionPointerTemplate(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  // 循环条件
  while (left < right) {
    // 3. 核心逻辑：根据左右指针指向的值进行计算或判断
    const currentValue = arr[left] + arr[right]; // 例如：计算两数之和

    // 4. 移动策略：根据计算结果与目标值的关系来移动指针
    if (currentValue < target) {
      // 当前值过小，需要增大，向右移动左指针
      left++;
    } else if (currentValue > target) {
      // 当前值过大，需要减小，向左移动右指针
      right--;
    } else {
      // currentValue === target
      // 5. 找到解：记录结果，并根据题目要求决定是否继续
      //    例如：result.push([arr[left], arr[right]]);
      console.log(`找到满足条件的对: ${arr[left]}, ${arr[right]}`);

      // 根据题目要求，可能需要跳过重复元素
      // while (left < right && arr[left] === arr[left + 1]) left++;
      // while (left < right && arr[right] === arr[right - 1]) right--;

      // 移动双指针，继续寻找下一组解
      left++;
      right--;
    }
  }

  return result;
}

// 快慢指针
function fastSlowPointerTemplate(arr) {
  let slow = 0;

  // 2. 快指针负责遍历整个数组，寻找“有效”的元素
  for (let fast = 0; fast < arr.length; fast++) {
    while (condition(arr[fast])) {
      slow++;
    }
  }
  return slow;
}
