/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let res = "";
  const numStack = [];
  const stringStack = [];

  let num = 0;
  for (const a of s) {
    if (!isNaN(a)) {
      num = num * 10 + Number(a);
    } else if (a === "[") {
      stringStack.push(res);
      res = "";
      numStack.push(num);
      num = 0;
    } else if (a === "]") {
      let repeatTimes = numStack.pop(); // 获取拷贝次数
      res = stringStack.pop() + res.repeat(repeatTimes); // 构建子串
    } else {
      res = res + a;
    }
  }
  return res;
};
const a = decodeString("3[a2[c]]");
console.log(a);
