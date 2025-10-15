// 103. Binary Tree Zigzag Level Order Traversal
// Medium
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: [[3], [20, 9], [15, 7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range[0, 2000].
// - 100 <= Node.val <= 100

var zigzagLevelOrder = function (root) {
    let level = 0;
    let ans = [];
    let q = [root];

    while (q.length) {
        let levelArr = [];
        let levelSize = q.length;
        for (let i = 0; i < levelSize; i++){
            let curr = q.shift();
            if (level % 2 === 0) {
                levelArr.push(curr.val);
            } else {
                levelArr.unshift(curr.val);
            }
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        level++;
        ans.push(levelArr)
    }
    return ans;
}