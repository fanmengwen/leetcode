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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const ans = [];
  if (!root) return ans;

  function dfs(root, index) {
    if (!root) return;
    if (ans[index] === undefined) {
      ans[index] = root.val;
    }
    index++;
    dfs(root.right, index++);
    index--;
    dfs(root.left, index);
  }

  dfs(root, 0);

  return ans;
};

const root = new TreeNode(1, new TreeNode(2), new TreeNode(0));

// 在本地运行
console.log(rightSideView(root));
