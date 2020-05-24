/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let nums1Index = m - 1;
    let nums2Index = n - 1;
    let sumLength = m + n - 1;
    while (nums1Index >= 0 && nums2Index >= 0) {
        nums1[sumLength--] = nums1[nums1Index] > nums2[nums2Index] ? nums1[nums1Index--] : nums2[nums2Index--];
    }
    nums1.splice(0, nums2Index + 1, ...nums2.slice(0, nums2Index + 1));
}
// @lc code=end

