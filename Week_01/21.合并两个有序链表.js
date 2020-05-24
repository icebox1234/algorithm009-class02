/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @思路 创建一个head指针，遍历l1和l2，选择其中较小的节点进行链接，被链接的链表和head同时向后移动。当l1或l2其中一个为空时
 * 停止遍历，并将剩余的链表链接到head指针的next上
 * @时间复杂度 遍历了链表l1和l2，O(M+N)
 * @空间复杂度 常数空间，O(1)
 */
var mergeTwoLists_1 = function (l1, l2) {
    let head = new ListNode(0);
    let poiterToHead = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    head.next = l1 === null ? l2 : l1;
    return poiterToHead.next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @思路 当有一方是空链表时，返回另一个链表，否则，较小一方的链表去链接下一层递归返回的节点并返回该节点自身
 * @时间复杂度 遍历了链表l1和l2，O(M+N)
 * @空间复杂度 递归调用是要保存剩余状态，递归调用了m+n次，故O(M+N)
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
// @lc code=end

