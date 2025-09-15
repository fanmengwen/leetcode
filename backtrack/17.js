/**
 * @param {string} digits
 * @return {string[]}
 */

const aplpha = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
};
var letterCombinations = function (digits) {
  // 构建字典

  // 开始计算
  let len;
  const digitsArray = [];
  const res = [];
  const path = [];

  for (const ch of digits) {
    const index = Number(ch);
    digitsArray.push(aplpha[index]);
  }

  len = digitsArray.length;
  console.log("sds", aplpha, digitsArray);

  if (len === 0) {
    return [];
  }
  function dfs(path, startIndex) {
    if (path.length === len) {
      res.push(path);
      return;
    }
    for (let j = 0; j < 3; j++) {
      path += digitsArray[startIndex][j];
      dfs(path, startIndex + 1);
      path = path.slice(0, path.length - 1); // 回溯上一个 path
    }
  }
  dfs(path, 0);

  return res;
};

console.log(letterCombinations("23"));
