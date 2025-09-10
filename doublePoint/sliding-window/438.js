/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 滑动窗口，固定长度
 */
var findAnagrams = function (s, p) {
  const m = new Map();
  const ans = [];
  for (const i of p) {
    m.set(i, (m.get(i) || 0) + 1); // 窗口大小就是 P 长度
  }
  let right = 0;
  // 初始化第一个窗口
  for (; right < p.length; right++) {
    if (m.has(s[right])) {
      const newVa = m.get(s[right]) - 1;
      m.set(s[right], newVa);
    }
  }

  // 整体滑动
  for (let l = 0; l < s.length; l++) {
    const val = Array.from(m.values()).every((v) => v === 0);
    if (val) {
      // 存在a,b,c，得到一个结果
      ans.push(l);
    }
    //处理下一个进入窗口的值
    if (m.has(s[right])) {
      m.set(s[right], m.get(s[right]) - 1);
    }
    //处理下一个出去窗口的值
    if (m.has(s[l])) {
      m.set(s[l], m.get(s[l]) + 1);
    }
    right++;
  }

  return ans;
};

console.log(findAnagrams("cbaebabacd", "abc"));
