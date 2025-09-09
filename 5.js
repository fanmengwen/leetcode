/**
 * @param {string} s
 * @return {string}
 */

function isPar(s) {
  return s === s.split("").reverse().join("");
}
var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= s.length; j++) {
      const str = s.slice(i, j);
      console.log("🚀 ~ longestPalindrome ~ str:", str);
      if (isPar(str)) {
        res = str.length > res.length ? str : res;
      }
    }
  }
  return res;
};

// console.log(longestPalindrome("a"));
var longestPalindrome2 = function (s) {
  let left = 0,
    right = 0;
  let res = "";

  for (let i = 0; i < s.length; i++) {
    left = i;
    right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > res.length) res = s.slice(left, right + 1);
      left--;
      right++;
    }

    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > res.length) res = s.slice(left, right + 1);
      left--;
      right++;
    }
  }
  return res;
};

console.log(longestPalindrome2("aacabdkacaa"));
