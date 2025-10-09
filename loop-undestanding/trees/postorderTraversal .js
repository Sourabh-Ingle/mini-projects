// 145. Binary Tree Postorder Traversal
// Given the root of a binary tree, return the postorder traversal of its nodes' values.



var postorderTraversal=function(root){
    let ans = [];
    function traverse(curr) {
        if (!curr) return;
        traverse(curr.left);
        traverse(curr.right);
        ans.push(curr.val);
    }
    traverse(root);

    return ans;
}