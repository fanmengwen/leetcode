function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 * 分割链表，并保证顺序，双指针维护两个链表，最后结合
 */
var partition = function (head, x) {
  let small = new ListNode(0);
  const smallHead = small;
  let large = new ListNode(0);
  const largeHead = large;

  while (head !== null) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
  }
  large.next = null;
  small.next = largeHead.next;
  return smallHead;
};

console.log(partition([1, 4, 3, 2, 5, 2], 3));
