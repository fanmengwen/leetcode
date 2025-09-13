function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 寻找最近的祖先
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root; //如果当前节点 root 就是 p 或者 q 中的一个，那么根据LCA的定义，这个节点自身就是它和它子孙节点的LCA

  // 分治”思想。当前节点 root 把任务派发给左右子节点，让它们分别去自己的子树里寻找 p 和 q。
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root; // 如果一个目标在左子树，另一个在右子树，那么当前这个 root 节点就一定是它们的第一个交汇点，也就是最近公共祖先！
  return left || right;
  /*
  况A：left 不是 null，right 是 null。这说明在左子树中找到了 p 或 q，left 就是祖先。
  情况B：left 是 null，right 不是 null。同理，说明右子树是既有p 或 q， 结果是 right。
  情况C：left 和 right 都是 null。这说明左右子树什么都没找到，那么当前节点 root 的子树中就没有目标。我们向上报告 null。 null || null 的结果是 null。
*/
};

// 测试
let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(5)),
  new TreeNode(4)
);

let p = root.left; // 节点 2
let q = root.left.right; // 节点 5

let ans = lowestCommonAncestor(root, p, q);
console.log(ans.val); // 输出 2
