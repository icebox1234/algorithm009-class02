/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @算法复杂度 O(N)
 * @空间复杂度 O(N)
 */
var twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; ++i) {
        if (!map.hasOwnProperty(target - nums[i])) {
            map[nums[i]] = i;
        } else {
            return [map[target - nums[i]], i];
        }
    }
};
// @lc code=end

