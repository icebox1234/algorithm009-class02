/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * @时间复杂度 O(M) M为节点个数
 * @空间复杂度 O(M)
 */
var preorder_1 = function (root) {
    if (root === null) {
        return [];
    }
    function preorderFn(root) {
        if (root === null) {
            return;
        }
        path.push(root.val);
        for (let i of root.children) {
            preorderFn(i);
        }
    }
    let path = [];
    preorderFn(root);
    return path;
};

/**
 * @param {Node} root
 * @return {number[]}
 * @时间复杂度 O(M) M为节点个数
 * @空间复杂度 O(M)
 */
var preorder = function (root) {
    let stack = [];
    let path = [];
    if (root === null) {
        return path;
    }
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        path.push(node.val);
        node.children.reverse().forEach(child => {
            stack.push(child);
        });;
    }
    return path;
};
// @lc code=end

