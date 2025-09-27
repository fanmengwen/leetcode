// 迭代法（使用哨兵节点和双指针）
//我们使用一个“哨兵”（dummy）节点来简化头节点的处理，同时用 current 指针来构建新链表。

/**
 * 定义链表节点
 * @param {number} val
 * @param {ListNode | null} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 删除排序链表中的重复元素 II
 * 对于所有重复的节点，一个都不保留
 * @param {ListNode} head
 * @return {ListNode | null}
 */
const deleteDuplicates = function (head) {
  // 如果链表为空或只有一个节点，则不可能有重复，直接返回
  if (!head || !head.next) {
    return head;
  }

  const dummy = new ListNode(0, head);

  // 'current' 指针用于构建不含重复元素的新链表
  let current = dummy;

  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      const duplicateVal = current.next.val;
      // 1 1
      while (current.next && current.next.val === duplicateVal) {
        // 直接这样消除里面的重复元素
        current.next = current.next.next;
      }
    } else {
      // 如果不相等，说明 current.next 不是重复节点，可以安全地保留
      // 将 current 指针后移一位
      current = current.next;
    }
  }

  return dummy.next;
};

// 辅助函数：根据数组创建链表
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// 辅助函数：打印链表
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// 示例 1: 1->1->2->3
console.log("输入: 1->1->2->3");
let head1 = createLinkedList([1, 1, 2, 3]);
let result1 = deleteDuplicates(head1);
console.log("输出:");
printLinkedList(result1); // 预期输出: 2 -> 3

console.log("--------------------");

// 示例 2: 1->2->3->3->4->4->5
console.log("输入: 1->2->3->3->4->4->5");
let head2 = createLinkedList([1, 2, 3, 3, 4, 4, 5]);
let result2 = deleteDuplicates(head2);
console.log("输出:");
printLinkedList(result2); // 预期输出: 1 -> 2 -> 5

console.log("--------------------");
