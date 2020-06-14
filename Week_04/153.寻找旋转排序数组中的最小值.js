/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin_1 = function (nums) {
    let minNum = Number.MAX_SAFE_INTEGER;
    function findMinFn(nums) {
        let start = nums[0];
        let end = nums[nums.length - 1];
        if (start < end || nums.length === 1) {
            minNum = Math.min(minNum, start);
            return;
        }
        findMinFn(nums.splice(0, Math.floor(nums.length / 2)));
        findMinFn(nums);
    }
    findMinFn(nums);
    return minNum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let minNum = Number.MAX_SAFE_INTEGER;
    function findMinFn(start, end) {
        if (start > end) {
            return;
        }
        if (nums[start] < nums[end] || start === end) {
            minNum = Math.min(minNum, nums[start]);
            return;
        }
        let cut = Math.floor((start + end) / 2);
        findMinFn(0, cut);
        findMinFn(cut + 1, end);
    }
    findMinFn(0, nums.length - 1);
    return minNum;
};
// @lc code=end

