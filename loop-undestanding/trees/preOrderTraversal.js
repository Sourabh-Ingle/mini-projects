// 144. Binary Tree Preorder Traversal

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// function TreeNode(val, left, right) {
//      this.val = (val === undefined ? 0 : val)
//      this.left = (left === undefined ? null : left)
//      this.right = (right === undefined ? null : right)
// }

var preorderTraversal = function (root) {
    let ans = [];
    function traverse(curr) {
        if (!curr) return;
        ans.push(curr.val);
        traverse(curr.left);
        traverse(curr.right);
    }
    traverse(root)
    return ans
}

// ITERATIVE WAY TO HANDLE THIS 
var preorderTraversal = function (root) { 
    if (!root) return [];
    let s1 = [root];
    let s2 = [];
    while (s1.length) {
        let curr = s1.pop();
        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }

    while (s2.length) {
        ans.push(s2.pop().val)
    }
    return ans
}