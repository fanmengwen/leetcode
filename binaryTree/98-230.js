// 定义 TreeNode 构造函数
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function (root, leftMin = -Infinity, rightMax = Infinity) {
  if (!root) return true;
  const x = root.val;
  console.log("🚀 ~ isValidBST ~ x:", x, leftMin, rightMax);
  return (
    leftMin < x &&
    x < rightMax &&
    isValidBST(root.left, leftMin, x) &&
    isValidBST(root.right, x, rightMax)
  );
};
// 构造一个二叉树
//       1
//     /   \
//    2     3
//   / \   /
//  4   5 6
const root = new TreeNode(5, new TreeNode(1), new TreeNode(7, new TreeNode(4)));

// 在本地运行
console.log(isValidBST(root));
// 输出: [[1],[2,3],[4,5,6]]
