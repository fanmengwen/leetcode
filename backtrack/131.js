function isPar(s) {
  console.log("🚀 ~ isPar ~ s:", s);
  return s === s.split("").reverse().join("");
}

/**
 * @param {string} s
 * @return {string[][]}
 *
 * 所有可能的分割方案 , 使用回溯
 * 当切割后的字符串是回文，则push
 * 每次遍历切割的位置，第一次切 1, 第二个切2
 */

var partition = function (s) {
  const res = [];
  const path = [];

  function dfs(startIndex) {
    if (startIndex >= s.length) {
      // 切割到末尾，注意要深拷贝
      res.push(path.slice());
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      const currentString = s.substring(startIndex, i + 1);
      // 必须往后切割，所以从 startIndex 开始
      if (isPar(currentString)) {
        path.push(currentString);
        dfs(i + 1);
        path.pop();
      }
    }
  }

  dfs(0);
  return res;
};
console.log("🚀 ~ partition ~ partition:", partition("aab"));
