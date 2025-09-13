/**
 * @param {string} s
 * @return {number[]}
 * 划分字母区间
 * 核心思想一：一个区间要成立，必须包含其中所有字母的全部出现
      一个区间之所以能成为一个独立的、合法的划分，意味着这个区间内的任何一个字母，都不会再出现在字符串后面的部分。
      例如，对于字符串 abacaba，[abaca] 不能成为一个划分，因为字母 b 还会出现在后面。
      而 [abacaba] 可以成为一个划分，因为它包含了 a 和 b 和 c 在整个字符串里的所有出现。

 通过一次遍历，贪心地维护和扩张一个“最远边界”，一旦当前位置追上了这个边界，就找到了一个划分点。
 */
var partitionLabels = function (s) {
  const hash = new Map();

  // 获取每个字符串的最远边界
  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], i);
  }

  let left = 0,
    right = 0;
  let res = [];
  for (let i = 0; i <= s.length; i++) {
    // 当前字符串需要达到的最远边界
    right = Math.max(right, hash.get(s[i]));
    if (i === right) {
      // 达到这个边界，说明已经形成一个结果
      res.push(right - left + 1);
      left = i + 1;
    }
  }
  return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
