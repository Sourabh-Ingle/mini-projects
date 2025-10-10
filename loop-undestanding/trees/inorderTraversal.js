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

var inOrderTraversal = function (root) {
    if(!root)return []
    let ans = [];
    let stack = [];
    let curr = root;
    while (stack.length || curr) {
        while (curr) {
            stack.push(curr.left);
            curr = curr.left;
        }
        curr = stack.pop(); 
        ans.push(curr.val);
        curr = curr.right;
    }

    return ans;

}