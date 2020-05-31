/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * @时间复杂度 O(N^2)
 * @空间复杂度 O(1)
 */
var trap_1 = function (height) {
    let water = 0;
    for (let i = 0; i < height.length; ++i) {
        let maxRight = 0, maxLeft = 0;
        for (let j = i; j >= 0; --j) {
            maxLeft = Math.max(maxLeft, height[j]);
        }
        for (let j = i; j < height.length; ++j) {
            maxRight = Math.max(maxRight, height[j]);
        }
        water += Math.min(maxLeft, maxRight) - height[i];
    }
    return water;
};

/**
 * @param {number[]} height
 * @return {number}
 * @时间复杂度 O(N)
 * @空间复杂度 O(N)
 */

var trap_2 = function (height) {
    let stack = [], water = 0;
    for (let i = 0; i < height.length; ++i) {
        while (stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
            let cur = stack.pop();
            if (stack.length <= 0) {
                break;
            }
            let waterHeight = Math.min(height[stack[stack.length - 1]], height[i]) - height[cur];
            water += waterHeight * (i - stack[stack.length - 1] - 1);
        }
        stack.push(i);
    }
    return water;
};

/**
 * @param {number[]} height
 * @return {number}
 * @时间复杂度 O(N)
 * @空间复杂度 O(1)
 */

var trap = function (height) {
    let left = 0, right = height.length - 1, water = 0;
    let maxLeft = 0, maxRight = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] < maxLeft) {
                water += maxLeft - height[left];
            } else {
                maxLeft = height[left];
            }
            ++left;
        } else {
            if (height[right] < maxRight) {
                water += maxRight - height[right];
            } else {
                maxRight = height[right];
            }
            --right;
        }
    }
    return water;
};
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// @lc code=end

