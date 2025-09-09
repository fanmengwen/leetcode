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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let head = null;
  function dfs(root) {
    if (!root) return;
    dfs(root.right);
    dfs(root.left);
    root.left = null;
    root.right = head;
    head = root;
  }

  dfs(root);
  //   return root;
};
const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)));

// 在本地运行
console.log(flatten(root));
