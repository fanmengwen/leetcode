function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 获得右侧的视图，那么可以先遍历右节点，确保了在同一层中，我们总是会先到达最右边的节点。
 * 我们是“右子树优先”遍历，第一个到达这一层的节点必然是该层最右边的节点。因此，代码会立即将该节点的值保存到 ans[x] 中。
 */
var rightSideView = function (root) {
  const ans = [];
  if (!root) return ans;

  function dfs(root, index) {
    if (!root) return;
    if (ans[index] === undefined) {
      ans[index] = root.val;
    }
    // 先进入下一层，此时 index 已经增加
    index++;
    dfs(root.right, index);
    dfs(root.left, index);
    // 退出该层时，将 index 减回
    index--;
  }

  dfs(root, 0);

  return ans;
};

const root = new TreeNode(1, new TreeNode(2), new TreeNode(0));

// 在本地运行
console.log(rightSideView(root));
