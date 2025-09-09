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
  return mergeList(head, null);
};

function mergeList(start, end) {
  if (!start) return start;
  if (start.next === end) {
    start.next = null; // 由于 end 属于右边那部分的，不关左边事，所以断开连接再返回
    return start;
  }
  let slow = start,
    fast = start;
  while (fast !== end) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== end) {
      // 否则 fast.next.next 会报错
      fast = fast.next;
    }
  } // 找到中点
  let middle = slow;
  return merge(mergeList(start, middle), mergeList(middle, end));
}

// [1,2,5] [2,3]
function merge(left, right) {
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
  return now.next;
}
