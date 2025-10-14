// 110. Balanced Binary Tree

// Given a binary tree, determine if it is height - balanced.

//     Example 1:
// Input: root = [3, 9, 20, null, null, 15, 7]
// Output: true

// Example 2:
// Input: root = [1, 2, 2, 3, 3, null, null, 4, 4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

// Constraints:
// The number of nodes in the tree is in the range[0, 5000].
// - 104 <= Node.val <= 104

var isBalanced = function (root) {
    if (!root) return true;
    let ans = true;

    let isHeightBalanced = function (curr) {
        let leftHeight = isHeightBalanced(curr.left);
        let rightHeight = isHeightBalanced(curr.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            ans = ans && false;
        }
        return 1 + Math.max(leftHeight, rightHeight)
    }
    isHeightBalanced(root);
    return ans
}