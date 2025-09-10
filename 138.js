/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 * 复制 随机指针的链表
 */
var copyRandomList = function (head) {
  if (head === null) {
    return head;
  }
  const hash = new Map(); // 通过哈希表

  let node = head;
  while (head) {
    hash.set(node, node.val);
    node = node.next;
  }

  node = head; // 从头开始构建 next 和  random
  while (node) {
    hash.get(node).next = hash.get(node.next);
    hash.get(node).random = hash.get(node.random);
    node = node.next;
  }
  return map.get(head);
};
