// 94. Binary Tree Inorder Traversal

//Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function (root) { 

    let ans = [];
    function traverse(curr) {
        if (!curr) return;
        traverse(curr.left);
        ans.push(curr.val);
        traverse(curr.right);
    }
    traverse(root);

    return ans;
}