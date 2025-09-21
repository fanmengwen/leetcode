// 找不大于n 的最小值
// 1. 位数一样， 数字也一样，递归找
// 2. 位数一样，从大到小找到第一个比预期值小的
// 3. 位数不一样，直接少一位，剩下用最大值填充

function getMaxBelow(nums, k) {
  nums.sort((a, b) => a - b);
  const maxNum = nums[nums.length - 1];
  const nArr = k.split("").map(Number);

  let isLessThan = false;
  let result = [];

  function dfs(index, path) {
    // 对 A 进行排序，从小到大
    if (index === nArr.length) {
      return path;
    }
    // 已经构造出小于 n 的前缀， 后面就用最大值填充
    if (isLessThan) {
      return [...path, ...Array(nArr.length - index).fill(maxNum)];
    }

    const nDigit = nArr[index];
    for (let i = nums.length - 1; i >= 0; i--) {
      const aDigit = nums[i];

      if (aDigit === nDigit) {
        // 找到相等的数字，就下一位
        const res = dfs(index + 1, [...path, aDigit]);
        if (res) {
          return res;
        }
      } else if (aDigit < nDigit) {
        // 当前值比预期小，因为是从大到小匹配，所以肯定没有相等的位时才能走到这里

        isLessThan = true;
        // 将该数字添加到路径，并用 A 中最大的数字填充剩余位
        return [
          ...path,
          aDigit,
          ...Array(nArr.length - index - 1).fill(maxNum),
        ];
      }
    }

    return null; //没有同位的数字，返回null
  }

  result = dfs(0, []);

  if (!result) {
    // 同位找不到，就填充最大数字 n-1 位数
    return [...Array(nArr.length - 1).fill(maxNum)];
  }
  return result;
}

console.log(getMaxBelow([2, 3, 5], "235"));

console.log(getMaxBelow([6, 6], "235")); // 同位没有
