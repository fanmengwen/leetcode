/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *最小覆盖子串， 滑动窗口，但是窗口大小不固定
 */
var minWindow = function (s, t) {
  let need = {},
    window = {};
  // 需要的字典
  for (let c of t) {
    need[c] = (need[c] || 0) + 1;
  }
  let left = 0,
    right = 0;
  let valid = 0;
  // 记录最小覆盖子串的起始索引及长度
  let start = 0,
    len = Infinity;
  while (right < s.length) {
    let c = s[right];
    right++;

    // 进行窗口内数据的一系列更新
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) {
        valid++;
      }
    }

    // 找到满足的，收紧左边窗口
    while (valid === Object.keys(need).length) {
      // 在这里更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      // d 是将移出窗口的字符
      let d = s[left];
      // 缩小窗口
      left++;
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return len === Infinity ? "" : s.substring(start, start + len);
};
console.log(minWindow("ADOBECODEBANC", "ABC"));
