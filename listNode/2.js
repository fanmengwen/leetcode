/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 递归处理，每次传递十进制的位数
 */
var addTwoNumbers = function (l1, l2, carry = 0) {
  if (l1 === null && l2 === null && carry === 0) {
    // 递归终点
    return null;
  }
  let s = carry;
  if (l1) {
    s += l1.val;
    l1 = l1.next;
  }
  if (l2) {
    s += l2.val;
    l2 = l2.next;
  }
  return new ListNode(s % 10, addTwoNumbers(l1, l2, Math.floor(s / 10))); // 递归下去
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
