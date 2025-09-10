/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 合并 K 个升序链表，可以先俩俩合并， 然后根据上一次俩俩合并的结果，再进行俩俩合并。
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const m = lists.length;
  if ((m = 0)) {
    return null;
  }

  // 俩俩合并
  for (let step = 1; step < m; step *= 2) {
    for (let i = 0; i < m - step; i += step * 2) {
      lists[i] = merge(lists[i], lists[i + step]);
    }
  }
  return lists[0];
};
