function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;
};

// 测试
let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(5)),
  new TreeNode(4)
);

let p = root.left; // 节点 2
let q = root.left.right; // 节点 5

let ans = lowestCommonAncestor(root, p, q);
console.log(ans.val); // 输出 2
