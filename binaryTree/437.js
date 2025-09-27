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
 * @param {number} targetSum
 * 穷举找路径和
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
   路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 */
var pathSum = function (root, targetSum) {
  if (root === null) {
    return 0;
  }
  let ret = rootSum(root, targetSum); // 穷举所有的可能， 以根节点开始的路劲
  ret += pathSum(root.left, targetSum); // 穷举所有的可能， 以根的左节点开始的路劲
  ret += pathSum(root.right, targetSum); // 穷举所有的可能， 以根的右节点开始的路劲
  return ret;
};

const rootSum = function (root, targetSum) {
  if (root === null) {
    return 0;
  }
  let ret = 0;
  if (root.val === targetSum) {
    ret++;
  }
  ret += rootSum(root.left, targetSum - root.val);
  ret += rootSum(root.right, targetSum - root.val);
  return ret;
};

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
 * @return {number}124. 二叉树中的最大路径和
 */
var maxPathSum = function (root) {
  if (!root) {
    return 0;
  }

  let maxSum = -Infinity;

  /**
   * 定义一个递归函数 dfs，它的作用是：
   * 1. 计算以当前 node 为顶点的路径和，并更新 maxSum
   * 2. 返回以当前 node 为起点的“单边最大路径和”（对父节点的贡献）
   * @param {TreeNode} node
   * @returns {number}
   */
  const dfs = (root) => {
    // 1. 基线条件：如果节点为空，它的贡献值为 0
    if (node === null) {
      return 0;
    }

    // 2. 递归计算左、右子树的最大贡献值
    // 如果子树的贡献值为负，则我们不采纳它，计为 0
    const leftGain = Math.max(0, dfs(node.left));
    const rightGain = Math.max(0, dfs(node.right));

    // 3. 计算以当前节点为“顶点”的路径和
    // 这条路径是 左边最大贡献 + 当前节点值 + 右边最大贡献
    // 用这个值来更新全局的 maxSum
    const priceNewPath = node.val + leftGain + rightGain;
    maxSum = Math.max(maxSum, priceNewPath);

    // 返回最大值
    return node.val + Math.max(leftGain, rightGain);
  };

  dfs(root);

  return maxSum;
};
