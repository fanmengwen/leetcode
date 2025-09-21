# 回溯

## startIndex

startIndex 的核心作用：去重与控制

### 需要解决的是“组合”问题还是“排列”问题？

#### 场景一：需要 startIndex 的情况 (组合/子集/分割问题)

当题目满足以下特征时，你几乎总是需要 startIndex：

- 特征：从一个集合中选取元素，且元素的选取顺序无关紧-要。即 [a, b] 和 [b, a] 被视为同一种结果。

- 目的：寻找所有满足条件的 组合 或 子集。

典型例子：

- LC 78. 子集 (Subsets)：[1, 2] 和 [2, 1] 是同一个子集。

- LC 39. 组合总和 (Combination Sum)：[2, 2, 3] 和 [2, 3, 2] 是同一个组合。

- LC 131. 分割回文串 (Palindrome Partitioning)：将字符串 "aab" 分割成 ["a", "a", "b"]。我们是从原字符串中“切割”出几段，本质上也是一种组合分割，切割的顺序决定了结果，但我们不会回头去重新切割已经处理过的部分。

思考过程与代码体现：

```JavaScript

function backtrack(path, startIndex) {
    for (let i = startIndex; i < candidates.length; i++) {
        // 做出选择
        path.push(candidates[i]);
        // 进入下一层决策
        // 关键点：将 i 或 i + 1 传入下一层
        backtrack(path, ???); // 思考下一层的 startIndex
        path.pop();
    }
}
```

1. 如果元素可以重复使用 (如 LC 39)：下一层递归从 i 开始，backtrack(path, i)。因为当前 i 位置的元素还可以继续使用。

2. 如果元素不可以重复使用 (如 LC 78)：下一层递归从 i + 1 开始，backtrack(path, i + 1)。因为当前 i 位置的元素已经用过了，不能再用。

#### 场景二：不需要 startIndex 的情况 (排列问题 或 独立选择问题)

当题目需要的是排列，或者每一步的选择是相互独立的，你通常不需要 startIndex，而是需要其他机制来记录状态。

- 特征：元素的选取顺序非常重要，顺序不同则结果不同。即 [a, b] 和 [b, a] 是两种不同的结果。

- 目的：寻找所有满足条件的 排列。

典型例子：

- LC 46. 全排列 (Permutations)：[1, 2, 3] 和 [1, 3, 2] 是不同的排列。

- LC 17. 电话号码的字母组合 (Letter Combinations of a Phone Number)：这不是一个典型的排列组合，而是分步选择问题。第一步从第一个数字的字母中选，第二步从第二个数字的字母中选，每一步的选择范围是固定的，与之前怎么选的无关。

```JavaScript
function backtrack(path, used) {
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) {
            continue; // 如果这个元素在当前路径中已经被使用，则跳过
        }
        // ...
        used[i] = true;
        backtrack(path, used);
        used[i] = false;
        // ...
    }
}
```

### 决定 DFS/回溯的参数

1. 路径参数 (Path Parameter)：

   几乎所有回溯问题都需要一个 path (或 current, temp 等) 参数，用来存储当前的路径/组合/排列。

2. 终止条件与状态参数 (Termination & State Parameters)：

   这可能是一个目标值 target (LC 39)，一个期望的长度 k，或者一个处理阶段的索引 index (LC 17)。

3. 去重与范围控制参数 ：

   _这是最关键的一步，问自己：这是一个组合问题还是排列问题？_

- 组合问题（顺序无关） => 引入 startIndex。每次 for 循环从 startIndex 开始，递归调用时传入 i 或 i + 1。

- 排列问题（顺序相关） => 引入 used 数组/Set。每次 for 循环从 0 开始，用 used 来跳过已用元素。

- 分步/映射问题（如电话号码） => 引入一个 index 来标记当前处理到第几步/第几个输入。递归调用时传入 index + 1。

### dfs 传递的值

dfs 里 startIndex 应该怎么给值

1.  dfs(..., i + 1): 元素不可重复的组合/子集,组合/子集 选了 i，下一轮从 i 的下一个开始选

2.  dfs(..., i): 元素可重复的组合

3.  dfs(..., startIndex + 1) ： 很少场景，比如 689 里 startIndex 的作用就和我们之前在电话号码组合问题中讨论的 index 完全一样，它标记的是任务的进度或决策的阶段
