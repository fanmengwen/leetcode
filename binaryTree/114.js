function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
  展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
  展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 采用头插法构建链表，要按照 6→5→4→3→2→1 的顺序访问节点（假设这是一棵从1到6的二叉树）。为了实现“头插法”，你必须逆序处理这些节点。

题目要求是 先序遍历（根左右）：头插法反过来处理，所以我们的遍历就是  (右-左-根
  先递归right，再递归left，最后处理root。

DFS 的同时，记录当前链表的头节点为 head。一开始 head 是空节点。
  具体来说：
  如果当前节点为空，返回。
  递归右子树。
  递归左子树。
  把 root.left 置为空。
  头插法，把 root 插在 head 的前面，也就是 root.right=head。
  现在 root 是链表的头节点，把 head 更新为 root。
 */
var flatten = function (root) {
  let head = null;
  function dfs(root) {
    if (!root) return;
    dfs(root.right);
    dfs(root.left);
    root.left = null;
    root.right = head;
    head = root;
  }

  dfs(root);
  //   return root;
};
const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)));

// 在本地运行
console.log(flatten(root));
