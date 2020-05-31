/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 */
var preorderTraversal_1 = function (root) {
    let path = [];
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
            if (node.left) {
                stack.push(node.left);
            }
            stack.push(node);
            stack.push(null);
        } else {
            path.push(stack[stack.length - 1].val);
            stack.pop();
        }
    }
    return path;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal_2 = function (root) {
    let path = [];
    let stack = [];
    if (root === null) {
        return [];
    }
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        path.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return path;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let path = [];
    let stack = [];
    let current = root;
    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            path.push(current.val);
            current = current.left;
        }
        current = stack.pop();
        current = current.right;
    }
    return path;
};
// @lc code=end

