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

// ITERATIVE WAY TO HANDLE THIS EITH TWO STACK
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

// // ITERATIVE WAY TO HANDLE POSTORDER TRAVESE TREE WITH ONE STACK
var preOrderTraversal = function (root) {
    let stack = [];
    let ans = [];
    let curr = root;
    let peakNode;
    let visitedValue;

    while (stack.length || curr) {
        while (curr) {
            stack.push(curr)
            curr=curr.left
        }
        peakNode = stack[stack.length - 1];
        if (peakNode.right && peakNode.right !== visitedValue) {
            curr = peakNode.right;
        } else {
            ans.push(peakNode.val);
            visitedValue = stack.pop()
        }
    }
    return ans;
}