/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i of strs) {
    let arr = Array.from(i);
    arr.sort();
    let key = arr.toString();
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(i);
    map.set(key, list);
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
