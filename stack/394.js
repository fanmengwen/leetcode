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
      stringStack.push(res); // 把之前的 string 和 num 存起来，开始计算 res
      numStack.push(num);
      num = 0;
      res = "";
    } else if (a === "]") {
      const cur = numStack.pop(); // 取出数值， 计算重复次数
      res = stringStack.pop() + res.repeat(cur);
    } else {
      res += a; // 连接字符串
    }
  }
  return res;
};
const a = decodeString("3[a2[c]]");
console.log(a);
