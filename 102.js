// 定义 TreeNode 构造函数
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  const ans = [];
  let cur = [root];

  while (cur.length) {
    let next = [];
    let vals = [];
    for (let node of cur) {
      vals.push(node.val);
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    cur = next;
    ans.push(vals);
  }
  return ans;
};

// 构造一个二叉树
//       1
//     /   \
//    2     3
//   / \   /
//  4   5 6
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), null),
  new TreeNode(3, null, new TreeNode(7))
);

// 在本地运行
console.log(levelOrder(root));
// 输出: [[1],[2,3],[4,5,6]]
