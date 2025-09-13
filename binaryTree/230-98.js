/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * 二叉搜索树里最k 小的值
 */
var kthSmallest = function (root, k) {
  let ans = 0;
  function dfs(node) {
    if (node === null || k === 0) return;
    dfs(node.left);
    if (--k === 0) {
      ans = node.val; // 根， 二叉搜索树的中序遍历的递增的，所以寻找 K 小，就是中序遍历第 K 的值
    }
    dfs(node.right);
  }

  dfs(root);
  return ans;
};
