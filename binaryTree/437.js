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
 * @return {number}
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
