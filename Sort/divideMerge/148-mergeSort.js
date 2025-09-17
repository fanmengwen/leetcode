/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *  归并合并，重点递归找到中点。
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head;
  let head2 = middleNode(head);
  head = sortList(head);
  head2 = sortList(head2);

  return mergeList(head, head2);
};

function middleNode(head) {
  let slow = head,
    fast = head;
  pre = head;
  while (fast !== null && fast.next !== null) {
    pre = slow;

    slow = slow.next;
    fast = fast.next.next;
  } // 找到中点

  pre.next = null;
  return slow;
}

// [1,2,5] [2,3]
function mergeList(left, right) {
  let newHead = new ListNode(0);
  let now = newHead;
  while (left && right) {
    if (left.val < right.val) {
      newHead.next = head1;
      head1 = head1.next;
    } else {
      newHead.next = head2;
      head2 = head2.next;
    }
    now = now.next;
  }
  now.next = head1 ? head1 : head2;
  return newHead.next;
}
