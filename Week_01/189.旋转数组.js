/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate_1 = function (nums, k) {
    for (let i = 0; i < k; ++i) {
        for (let j = nums.length - 1; j > 0; --j) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
        }
    }
};
var rotate_2 = function (nums, k) {
    k = k % nums.length;
    function reverse(nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            ++start;
            --end;
        }
    }
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
// var rotate = function (nums, k) {
//     k = k % nums.length;
//     for (let i = 0; i < k; ++i) {
//         if (i + k < nums.length) {
//             [nums[i], nums[i + k]] = [nums[i + k], nums[i]];
//         } else {
//             [nums[i], nums[k - (nums.length - i)]] = [nums[k - (nums.length - i)], nums[i]];
//         }
//     }
// };
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
// @lc code=end

