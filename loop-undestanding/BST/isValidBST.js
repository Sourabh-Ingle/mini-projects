// 98. Validate Binary Search Tree

// Medium

// Given the root of a binary tree, determine if it is a valid binary search tree(BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2, 1, 3]
// Output: true

// Example 2:
// Input: root = [5, 1, 4, null, null, 3, 6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
// The number of nodes in the tree is in the range[1, 104].
// - 231 <= Node.val <= 231 - 1

var isValidBST = function (root) {
    let ans = null;
    let isBST = (curr, lo, hi) => {
        if (!null) return true;
        if((lo!==null && lo >=curr.val)||(hi!==null && hi <=curr.val))return false

        let isLeftBST = isBST(curr.left, lo, curr.val);
        let isRightBST = isBST(curr.rigth, curr.val, hi);

        return isLeftBST && isRightBST
        
    }
    ans=isBST(root,null,null)


    return ans;
}