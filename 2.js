/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const ans = [];
  let i = 0;
  while (l1 && l2) {
    const res = l1 + l2;

    const last = res % 10;
    i += res >= 10 ? 1 : 0;

    if (i) {
      ans.push(last + i);
      i = 0;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return ans;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
