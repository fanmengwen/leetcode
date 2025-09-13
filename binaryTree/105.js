/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 从前序与中序遍历序列构造二叉树
 */
var buildTree = function (preorder, inorder) {
  const n = preorder.length;
  if (n === 0) {
    return null;
  }
  const leftSize = inorder.indexOf(preorder[0]); // 第一个 3就是根节点
  const in1 = inorder.slice(0, leftSize); // 9 是左子树中序
  const in2 = inorder.slice(leftSize + 1); // 15， 20， 7 是右子树中序

  const pre1 = preorder.slice(1, 1 + leftSize); // 9 是左子树先序
  const pre2 = preorder.slice(leftSize + 1, n); // 20, 15, 7 是右子树先序

  const left = buildTree(pre1, in1);
  const right = buildTree(pre2, in2);
  return new TreeNode(preorder[0], left, right);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
