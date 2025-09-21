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
