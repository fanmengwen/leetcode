/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;
  while (p1 && p1.next) {
    p1 = p1.next;
  }

  p1.next = p2;

  while (p2 && p2.next) {
    p2 = p2.next;
  }

  p2.next = headA;

  // 接下来
  p1 = headA;
  p2 = headB;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};
