/**
 * @param {TreeNode} root
 * @return {number}
 * 查询二叉树的最大深度： 遍历回溯
 * 前序位置是进入一个节点的时候，所以 depth ++
 * 后序位置是离开一个节点的时候, 所以 depth--
 */
var maxDepth = function (root) {
  // 记录遍历到的节点的深度
  let depth = 0;
  // 记录最大深度
  let res = 0;

  // 遍历二叉树
  var traverse = function (node) {
    if (node === null) {
      return;
    }

    // 前序遍历位置（进入节点）增加深度
    depth++;
    // 遍历到叶子节点时记录最大深度
    if (node.left === null && node.right === null) {
      res = Math.max(res, depth);
    }
    traverse(node.left);
    traverse(node.right);

    // 后序遍历位置（离开节点）减少深度
    depth--;
  };

  traverse(root);
  return res;
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 求直径，其实就是左右 maxDepth 之和最大 543
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  function maxDepth(node) {
    if (node === null) {
      return 0;
    }
    const leftMax = maxDepth(node.left);
    const rightMax = maxDepth(node.right);
    maxDiameter = Math.max(maxDiameter, leftMax + rightMax);

    return 1 + Math.max(leftMax, rightMax); // 最大路径，需要加上当前节点 + 左右最大的深度
  }
  return maxDepth(root);
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 反转二叉树
 */
var invertTree = function (root) {
  if (root === null) {
    return;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 判断是不是对称二叉树
 */
var isSymmetric = function (root) {
  function isSameTree(q, p) {
    if (q === null || p === null) {
      return q === p;
    }

    return (
      (q.val = p.val) &&
      isSameTree(q.left, p.left) && // 查询两个树的左节点
      isSameTree(q.right, p.right)
    );
  }

  return isSameTree(root.left, root.right);
};
