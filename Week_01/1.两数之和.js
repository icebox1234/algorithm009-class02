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
 * @思路 遍历一次，每次访问元素都会去map中查询是否存在构成target的目标值，如果存在，则返回，如果不存在，则加入map中为后续的查询做准备
 * @算法复杂度 O(N)
 * @空间复杂度 O(N)
 */
var twoSum_1 = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; ++i) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
};
// @lc code=end

