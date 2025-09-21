/**
 * @param {number[]} nums
 * @return {number[]}
 * 进阶的摩尔投票，找到次数超过 n/3 的元素
 * 核心思想（擂台赛升级版）：
    根据我们之前的分析，出现次数超过 n/3 的元素最多只会有两个。
    所以，这次我们需要两个擂台，来选出两个候选人 candidate1, candidate2，以及他们各自的血量 count1, count2。
  这个“三方抵消”的逻辑保证了，如果一个元素的数量真的超过了 n/3，
  就有足够多的“兵力”来对抗其他所有元素的消耗，最终它的代表一定会留在两个擂主的位置上。
*/
var majorityElement = function (nums) {
  let candidate1 = 0,
    count1 = 0;
  let candidate2 = 0,
    count2 = 0;

  let res = [];

  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      // 候选者1号被打倒就换人
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      // 候选者2号被打倒就换人
      candidate2 = num;
      count2 = 1;
    } else {
      // 抵消
      count1--;
      count2--;
    }
  }
  console.log(candidate1, candidate2);

  // 2. 验证候选人， 可能选出来的排名靠前，但是没超
  count1 = 0;
  count2 = 0;
  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    }
  }

  // 判断是不是大于 n/3
  if (count1 > nums.length / 3) {
    res.push(candidate1);
  }
  if (count2 > nums.length / 3) {
    res.push(candidate2);
  }
  return res;
};

console.log("🚀 ~ majorityElement:", majorityElement([3, 2, 3]));
