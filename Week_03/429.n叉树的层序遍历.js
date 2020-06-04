/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let resStack = [];
    let levelStack = [];
    let res = [];
    if (root === null) {
        return [];
    }
    resStack.push(root);
    while (resStack.length > 0) {
        res.push(resStack.map(item => item.val));
        for (let i = 0; i < resStack.length; ++i) {
            if (resStack[i].children) {
                levelStack.push(...resStack[i].children);
            }
        }
        resStack = [...levelStack];
        levelStack = [];
    }
    return res;
};
// @lc code=end

