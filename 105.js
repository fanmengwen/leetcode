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
 */
var buildTree = function (preorder, inorder) {
  const n = preorder.length;
  if (n === 0) {
    return null;
  }
  const leftSize = inorder.indexOf(preorder[0]);
  const in1 = inorder.slice(0, leftSize);
  const pre1 = preorder.slice(1, 1 + leftSize);

  const in2 = inorder.slice(leftSize + 1);
  const pre2 = preorder.slice(leftSize + 1, n);

  const left = buildTree(pre1, in1);
  const right = buildTree(pre2, in2);
  return new TreeNode(preorder[0], left, right);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
