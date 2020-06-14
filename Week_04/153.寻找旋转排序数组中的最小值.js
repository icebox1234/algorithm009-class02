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
var findMin_2 = function (nums) {
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

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin_3 = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums[0] < nums[nums.length - 1]) {
        return nums[0];
    }
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }
        if (nums[mid] > nums[0]) {
            left = mid + 1;
        } else {
            right = mid + 1;
        }
    }
    return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[right];
};
findMin([4, 5, 6, 7, 0, 1, 2]);
// @lc code=end

