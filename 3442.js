/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let map = {};
    for (const char of s) {
        map[char] = (map[char] || 0) + 1;
    }
    let max = 0;
    let min = Infinity;
    for (let k in map) {
        if (map[k] % 2 === 1) {
            max = Math.max(map[k], max)
        } else {
            min = Math.min(min, map[k])
        }
    }

    console.log("🚀 ~ maxDifference ~ max:", max)
    console.log("🚀 ~ maxDifference ~ min:", min)

    return max - min;

};

console.log(maxDifference("aaaaabbc"))