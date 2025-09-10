/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 同 496
 * 这个问题本质上也是找下一个更大元素，只不过现在不是问你下一个更大元素的值是多少，而是问你当前元素距离下一个更大元素的索引距离而已。
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const ans = Array(n).fill(0);
  const st = [];

  for (let i = n - 1; i >= 0; i--) {
    const t = temperatures[i];

    while (st.length && temperatures[st[st.length - 1]] <= temperatures[i]) {
      st.pop();
    }

    ans[i] = st.length ? st[st.length - 1] - i : 0;

    st.push(i); // 改成索引了，其他的逻辑都不变
  }
  return ans;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
