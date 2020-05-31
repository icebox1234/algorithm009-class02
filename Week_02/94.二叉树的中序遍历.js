/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * @时间复杂度 O(N)
 * @空间复杂度 最坏情况下O(N),平均O(logN)
 */
var inorderTraversal_1 = function (root) {

    if (!root) {
        return [];
    }
    function inorderTraversalFn(root) {
        if (root === null) {
            return;
        }
        inorderTraversalFn(root.left);
        path.push(root.val);
        inorderTraversalFn(root.right);
    }
    let path = [];
    inorderTraversalFn(root);
    return path;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 * @时间复杂度 O(N)
 * @空间复杂度 O(N)
 */
var inorderTraversal_2 = function (root) {
    if (!root) {
        return [];
    }
    let stack = [];
    let path = [];
    let current = root;
    while (stack.length > 0 || current !== null) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        let node = stack.pop();
        path.push(node.val);
        current = node.right;
    }
    return path;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 * @时间复杂度 O(N)
 * @空间复杂度 O(N)
 */
var inorderTraversal = function (root) {
    let res = [];
    let stack = [];
    if (root !== null) {
        stack.push(root);
    }
    while (stack.length > 0) {
        let node = stack.pop();
        if (node) {
            if (node.right) {
                stack.push(node.right);
            }
            stack.push(node);
            stack.push(null);
            if (node.left) {
                stack.push(node.left);
            }
        } else {
            res.push(stack[stack.length - 1].val);
            stack.pop();
        }
    }
    return res;
};
// @lc code=end

