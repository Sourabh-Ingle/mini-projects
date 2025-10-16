// 572. Subtree of Another Tree
// Easy
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:
// Input: root = [3, 4, 5, 1, 2], subRoot = [4, 1, 2]
// Output: true

// Example 2:
// Input: root = [3, 4, 5, 1, 2, null, null, null, null, 0], subRoot = [4, 1, 2]
// Output: false


// Constraints:
// The number of nodes in the root tree is in the range[1, 2000].
// The number of nodes in the subRoot tree is in the range[1, 1000].
// - 104 <= root.val <= 104
//     - 104 <= subRoot.val <= 104







// this solution is slitely slow as more recursion is there
var subTree = function (root, subRoot) {
    if (!root) return false;
    if (!subRoot) return true;

    if (isSameTree(root, subRoot)) return true;

    return subTree(root.left, subRoot) || subTree(root.right, subRoot);
}

function isSameTree(a, b){
    if (!a && !b) return true;
    if (!a || !b) return false;
    return (a.val === b.val) &&
        isSameTree(a.left, b.left) &&
        isSameTree(a.right, b.right)
}

// this solution is slitly fast
var subTree = function (root, subRoot) {
    if (!root) return false;
    if (!subRoot) return true;
    let q = [root];
    while (!q.length) {
        let curr = q.shift();
        if (curr.val === subRoot.val) {
            if (isSameTree(root, subRoot)) return true;
        }
        curr.left && q.push(curr.left);
        curr.right && q.push(curr.right);
         
        return subTree(curr.left, subRoot) || subTree(curr.right, subRoot);
    }
    return false;
}