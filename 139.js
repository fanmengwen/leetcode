/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const cur = s.substring(j, i);
      if (wordDict.includes(cur) && dp[j] === true) {
        dp[i] = true;
      }
    }
  }
  console.log("🚀 ~ wordBreak ~ dp:", dp);
  return dp[s.length];
};

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
