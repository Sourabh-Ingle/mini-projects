// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: 3

// Example 2:
// Input: root = [1, null, 2]
// Output: 2

// Constraints:
// The number of nodes in the tree is in the range[0, 104].
// - 100 <= Node.val <= 100

// TOP TO BOTTOM APPROCH
var maxDepth = function (root) {
    let maxLevel = 0;
    let topToBottomDepth = function (curr, level) {
        maxLevel = Math.max(level, maxLevel);
        curr.left && topToBottomDepth(curr.left, level + 1);
        curr.right && topToBottomDepth(curr.right,level+1)
    }
    topToBottomDepth(root, 1);

    return maxLen;
}

// BOTTOM TO TOP APPROCH
var maxDepth = function (root) {
    if (!root) return 0;
    let maxLeft = maxDepth(root.left);
    let maxRight = maxDepth(root.right);
    return 1 + Math.max(maxLeft,maxRight)
}
