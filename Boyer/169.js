/*
摩尔投票法是一种用于寻找数组里次数 > n/2 的元素。
前提： 存在多数元素（出现次数 > n/2）
它的核心思想是 “抵消”：如果一个元素出现的次数比其他所有元素出现次数的总和还多，那么它一定会成为最后的候选人。
    因为一个元素的出现次数超过了 n/2，意味着它的数量比所有其他元素数量的总和还要多。
    就像在一场战斗中，多数派的士兵数量超过了所有其他派别士兵的总和。
    即使一个多数派士兵换掉一个其他派的士兵，最终也一定会有多数派的士兵留下来。
    那个最后留在擂台上的，一定是代表多数派的
*/

function findMostNum(nums) {
  let candidate = 0,
    count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    if (num === candidate) {
      count++;
    } else {
      count--;
    }
    console.log("🚀 ~ findMostNum ~ candidate:", candidate, count, num);
  }
  return candidate;
}

console.log("🚀 ~ findMostNum:", findMostNum([3, 3, 2, 4]));
