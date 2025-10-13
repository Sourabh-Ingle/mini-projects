// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself
//     (i.e., symmetric around its center).

// Example 1:
// Input: root = [1, 2, 2, 3, 4, 4, 3]
// Output: true

// Example 2:
// Input: root = [1, 2, 2, null, 3, null, 3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range[1, 1000].
// - 100 <= Node.val <= 100

// RECCURSIVE WAY
var isSymmetric = function (root) {
    let isSimilar = function (left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;

        return left.val === right.val && 
               isSimilar(left.left, right.right) &&
               isSimilar(left.right,right.left)
    }
    return isSimilar(root.left,root.right)
}

// ITERATIVE WAY
// we are solving this question by using level order travese tree;
// so we are using queue over here
var isSymmetric = function (root) {
    let q = [root.left, root.right];

    while (q.length) {
        let p1 = q.shift();
        let p2 = q.shift();

        if (!p1 && !p2) continue;
        if (p1 || !p2) return false;
        if (p1.val !== p2.val) return false;
        q.push(p1.left, p2.righr);
        q.push(p1.right,p2.left)
    }

}