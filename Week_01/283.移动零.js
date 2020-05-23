/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @description 将非0的元素移动到0的左边，将0移动到0的右边，类似于快排（0就是分割点）
 */
var moveZeroes1 = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            ++j;
        }
    }
};
/**
 * 
 * @param {number[]} nums 
 * @return {void}
 * @description 将所有非0元素移动到数组的左边，同时标记最后一个非0元素的位置
 * 再根据该位置与数组长度的差值将数组剩余元素都置为0
 */
var moveZeroes = function (nums) {
    let lastNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZero++] = nums[i];
        }
    }
    for (; lastNonZero < nums.length; lastNonZero++) {
        nums[lastNonZero] = 0;
    }
};
// @lc code=end