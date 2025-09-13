function TreeNode(node, left, right) {
  this.value = node;
  this.left = left;
  this.right = right;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 升序 排列 , 转换成平衡二叉树: 任意节点的左右两个子树的高度差的绝对值不超过 1
 * 只要每次取中间的值作为根节点
 */
var sortedArrayToBST = function (nums) {
  function dfs(left, right) {
    if (left === right) {
      return null;
    }
    const middle = Math.floor((right + left) / 2);
    return new TreeNode(nums[middle], dfs(left, middle), dfs(middle, right));
  }

  return dfs(0, nums.length);
};

// [-10,-3,0,5,9]
