// 定义 TreeNode 构造函数
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/*
层序遍历， 递归处理，每次更新当前的 cur,然后循环 cur, 
1. 一个数组 cur 存当前层，一个数组 next 存下一层
2. while 循环负责启动一层的处理，for 循环负责完成这一层的处理。在 for 循环里，只做两件事：
      记录当前节点的值到 vals。
      把当前节点的子节点推入 next。
   for 循环结束后，用 next 覆盖 cur，继续重复
进阶版本 199
*/
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
      // 循环每一个节点，获取他的左右节点作为下一次层级
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
