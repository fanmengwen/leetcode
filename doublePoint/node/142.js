/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 快慢指针判断有没有环， 并返回
 */
var detectCycle = function (head) {
  let fast, slow;
  fast = slow = head;
  while (fast !== null && fast.next !== null) {
    fast.next = fast.next.next;
    slow = slow.next;
    if (fast == slow) break; //相遇了， 说明有环
  }

  if (fast === null || fast.next !== null) {
    return null;
  }

  // 相遇的点是 k-m, head - 环节点 = 相遇点 - 环节点，
  // 所以一个点从 head 开始走， 另一个继续转环，相遇的时候就是环节点
  slow = head;
  while (slow !== fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
