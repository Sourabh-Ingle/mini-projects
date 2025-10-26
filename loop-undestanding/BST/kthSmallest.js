// 230. Kth Smallest Element in a BST

// Medium

// Given the root of a binary search tree, and an integer k, return the kth smallest value
// (1 - indexed) of all the values of the nodes in the tree.

//Example 1:
// Input: root = [3, 1, 4, null, 2], k = 1
// Output: 1

// Example 2:
// Input: root = [5, 3, 6, 2, 4, null, null, 1], k = 3
// Output: 3

// Constraints:
// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

// AS WE KNOW INORDER TRAVERSAL IN BST GIVE INCREMENTAL SORTED ARRAY SO WE CAN USE THAT OVER HERE
var kthSmallest = function (root, k) {
    let ans = null;
    let count = k;
    let traverse = (curr) => {
        if (!curr.left) return;
        curr.left && traverse(curr.left);
        count--;
        if (count === 0) {
            ans = curr.val;
        }
        curr.right && traverse(curr.right);
    }
    traverse(root);
    return ans;
}

