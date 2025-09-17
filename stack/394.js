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
      // [	进入子问题，暂停当前任务	把 res 和 num 推入(push) 栈中，然后重置它们
      stringStack.push(res); // 把之前的 string 和 num 存起来，开始计算 res
      numStack.push(num);
      num = 0;
      res = "";
      // ]	子问题结束，继续上一个任务	从栈中弹出(pop) res和num，计算结果并合并
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
