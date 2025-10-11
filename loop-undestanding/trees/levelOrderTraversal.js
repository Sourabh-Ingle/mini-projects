// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values.
//     (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: [[3], [9, 20], [15, 7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range[0, 2000].
// - 1000 <= Node.val <= 1000


// ITERATIVE WAY 

var levelOrder = function (root) {
    if (!root) return [];
    let q = [root];
    let ans = [];

    while (q.lwngth) {
        let levelArr = [];
        let qLength = q.length;
        for (let i = 0; i < qLength; i++){
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArr.push(curr.val);  
        }
        ans.push(levelArr)
    }
    return ans;
}


// RECURSSIVE WAY
var levelOrder = function (root) {
    if (!root) return [];
    let ans = []
    function travers(curr, level) {
        if (!ans[level]) return ans[level] = [];
        ans[level].push(curr.val);
        curr.left && travers(curr.left, level + 1);
        curr.right && travers(curr.right, level + 1);
    }

    return ans;
}