//25. K 个一组翻转链表
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 如果分组成功（凑够了k个），就断开这组，调用一个辅助函数去反转它。
        反转后，再小心地拼接回去。
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy; // pre 永远是待反转区间的前一个节点
  while (head) {
    let tail = pre; // tail 从 pre 开始，方便寻找第 k 个节点
    // 2. 探路：检查剩余部分是否有 k 个节点
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        // 剩余节点不足 k 个，直接返回 dummy.next
        return dummy.next;
      }
    }

    const nextGroupHead = tail.next; // 暂存下一组的头节点
    tail.next = null; // 断开链表，形成一个长度为 k 的独立子链表

    pre.next = reverseLinkedList(head);

    // 此时，原来的 head 节点反转后已经成为了当前组的尾节点
    // 将它与下一组的头节点连接起来
    head.next = nextGroupHead;

    // 5. 为下一轮循环更新指针
    pre = head; // 新的 pre 是当前组的尾节点（原来的 head）
    head = nextGroupHead; // 新的 head 是下一组的头节点
  }
  return dummy.next;
};

/**
 * 辅助函数：反转一个链表的一部分
 * 接收一个头节点 head，反转整个链表，并返回新的头节点
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseLinkedList = (head) => {
  let pre = null;
  let curr = head;
  while (curr) {
    const nextTemp = curr.next; // 暂存下一个节点
    curr.next = pre; // 当前节点指向前一个节点
    pre = curr; // pre 指针后移
    curr = nextTemp; // curr 指针后移
  }
  return pre; // pre 最终是新的头节点
};
