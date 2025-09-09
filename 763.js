/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const hash = new Map();

  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], i);
  }

  let left = 0,
    right = 0;
  let res = [];
  for (let i = 0; i <= s.length; i++) {
    right = Math.max(right, hash.get(s[i]));
    if (i === right) {
      res.push(right - left + 1);
      left = i + 1;
    }
  }
  return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
