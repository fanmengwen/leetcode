function TreeNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 反转链表;
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next; // 暂存下一个节点
    curr.next = prev; // 反转指针

    prev = curr;
    curr = next;
  }
  return prev; // prev 就是新的头节点
};

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 反转链表 II 92 头插法：每次把 curr.next 插到 prev 后面
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  // 1. 走到 left-1
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  // 2. 开始反转, 由于是头插法，所以每次只处理 cur 与 Prev 不用每次赋值
  let curr = prev.next;
  for (let i = 0; i < right - left; i++) {
    let next = curr.next; // 取出 curr 的下一个节点
    curr.next = next.next; // curr 指向 next 的下下个
    next.next = prev.next; // next 插到 prev 后面
    prev.next = next; // prev 连接到 next
  }
};
