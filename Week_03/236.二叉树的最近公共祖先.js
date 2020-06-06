/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor_1 = function (root, p, q) {
    let node = null;
    function lowestCommonAncestorFn(root, p, q) {
        if (root === null) {
            return null;
        }
        let left, right;
        left = lowestCommonAncestorFn(root.left, p, q);
        right = lowestCommonAncestorFn(root.right, p, q);
        if (left && right) {
            node = root;
            return null;
        }
        if ((root.val === q.val || root.val === p.val) && (right || left)) {
            node = root;
            return null;
        }
        if (right || left || (root.val === q.val || root.val === p.val)) {
            return root;
        }
        return null;
    }
    lowestCommonAncestorFn(root, p, q)
    return node;
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let node = null;
    function lowestCommonAncestorFn(root, p, q) {
        if (root === null) {
            return false;
        }
        [left, right] = [lowestCommonAncestorFn(root.left, p, q), lowestCommonAncestorFn(root.right, p, q)];
        if ((left && right) || ((root.val === q.val || root.val === p.val) && (left || right))) {
            node = root;
        }
        return left || right || (root.val === p.val || root.val === q.val);
    }
    lowestCommonAncestorFn(root, p, q)
    return node;
};
// @lc code=end

