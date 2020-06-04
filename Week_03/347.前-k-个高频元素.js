/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    nums.sort((a, b) => {
        return a - b;
    });
    let map = {};
    let num = void 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== num) {
            map[nums[i]] = 1;
            num = nums[i];
        } else {
            map[nums[i]]++;
        }
    }
    let res = Object.entries(map).sort((a, b) => {
        return b[1] - a[1];
    })
    while (res.length > k) {
        res.pop();
    }
    return res.map(item => parseInt(item[0], 10));
};
// console.log(topKFrequent([3,2,2,1,1], 2));
// @lc code=end

