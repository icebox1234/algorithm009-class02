/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * @时间复杂度  O(N) 构造树需要遍历每一个节点
 * @空间复杂度  O(N^2) 每次向下递归时，要保存其余的n-1个节点 
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length <= 0 || inorder.length <= 0) {
        return null;
    }
    let node = new TreeNode(preorder[0]);
    let locationInInorder = inorder.indexOf(preorder[0]);
    preorder.shift();
    let preorderLLeft = preorder.splice(0, locationInInorder);
    let preorderRight = preorder;
    node.left = buildTree(preorderLLeft, inorder.slice(0, locationInInorder));
    node.right = buildTree(preorderRight, inorder.slice(locationInInorder + 1));
    return node;
};
// buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
// @lc code=end

