//3, 7 幸运数字,  333, 777, 377,  比 n 大的第一个幸运数字
function getLuckNumber(k) {
  const targetLen = k.length;
  const luckNums = [3, 7];

  let lessThan = false;
  function dfs(path, startIndex) {
    if (path.length === targetLen) {
      return path.slice();
    }
    if (lessThan) {
      // 剩下补小, 3 填充剩余的位数
      return [path, ...Array(targetLen - startIndex).fill(3)].join("");
    }

    for (let num of luckNums) {
      if (num > k[startIndex]) {
        lessThan = true;
        return dfs(path + num, startIndex + 1);
      } else if (num === k[startIndex]) {
        return dfs(path + num, startIndex + 1);
      }
    }
  }

  const res = dfs("", 0);

  // 同一位没有找到
  if (!res) {
    return Array(targetLen + 1)
      .fill(3)
      .join("");
  }
  return res;
}

console.log("🚀 ~ myFunction:", getLuckNumber("84"));
