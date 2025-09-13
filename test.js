/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (s) {
  const hash = new Map();
  for (let i in s) {
    hash.set(s[i], i);
  }

  const ans = [];
  let right = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, hash.get(s[i]));
    if (right === i) {
      ans.push(right - left);
    }
  }
  console.log("🚀 ~ jump ~ hash:", hash);
};

console.log(jump("ababcbacadefegdehijhkli"));
