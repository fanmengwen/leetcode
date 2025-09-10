// 定义 TreeNode 构造函数
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  const dummy = new ListNode(0, head); // 用哨兵节点简化代码逻辑
  let node0 = dummy;
  let node1 = head;

  while (node1 && node1.next) {
    const node3 = node1.next.next;

    node0.next = node1.next;
    node0.next.next = node1;
    node0.next.next.next = node3;

    node0 = node1;
    node1 = node3;
  }
  return dummy.next; // 返回新链表的头节点
};

const root = new ListNode(1, new ListNode(2, new ListNode(3), new ListNode(4)));
console.log(swapPairs(root));
