/**
 * @param {string} s
 * @return {number}
 * 无重复字符的最长子串, 滑动窗口
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let set = new Set();
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
      // 知道没有重复的子串
    }
    set.add(s[i]);
    ans = Math.max(ans, i - left + 1);
  }
  return ans;
};
console.log(lengthOfLongestSubstring("pwwkew"));
