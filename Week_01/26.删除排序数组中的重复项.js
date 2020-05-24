/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @时间复杂度 O(N^2)
 * @空间复杂度 O(1)
 */
var removeDuplicates_1 = function (nums) {
    for (let i = 0; i < nums.length; ++i) {
        let repeatCount = 0;
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] !== nums[i]) {
                break;
            } else {
                repeatCount++;
            }
        }
        nums.splice(i, repeatCount);
    }
    return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 * @时间复杂度 O(N)
 * @空间复杂度 O(1)
 */
var removeDuplicates = function (nums) {
    let i = 0, j = 1;
    for (; j < nums.length; ++j) {
        if (nums[i] !== nums[j]) {
            ++i;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// @lc code=end

