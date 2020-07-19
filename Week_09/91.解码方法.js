/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var numDecodings_1 = function (s) {
    if (s.startsWith('0')) {
        return 0;
    }
    let dp = new Array(s.length + 1);
    dp[dp.length - 1] = 1;
    dp[dp.length - 2] = s[s.length - 1] === '0' ? 0 : 1;
    for (let i = s.length - 2; i >= 0; --i) {
        if (s[i] === '0') {
            dp[i] = 0;
        } else {
            let num = parseInt(s[i] + s[i + 1], 10);
            if (num <= 26) {
                dp[i] = dp[i + 1] + dp[i + 2];
            } else {
                dp[i] = dp[i + 1];
            }
        }
    }
    return dp[0];
};


/**
 * @param {string} s
 * @return {number}
 * @description 递归形式 Time Limit Exceeded
 */
var numDecodings2 = function (s) {
    if (s === null || s.length <= 0) {
        return 0;
    }
    let memStr = new Map();
    function numDecodingsRe(s, location) {
        if (s.slice(location).startsWith('0')) {
            return 0;
        }
        if (location > s.length - 1) {
            return 1;
        }
        if (location === s.length - 1) {
            return 1;
        }
        let divide1, divide2 = 0;
        if (memStr.has(location + 1)) {
            divide1 = memStr.get(location + 1);
        } else {
            divide1 = numDecodingsRe(s, location + 1);
            memStr.set(location + 1, divide1);
        }
        if (location + 1 < s.length) {
            if (parseInt(s[location] + s[location + 1], 10) <= 26) {
                if (memStr.has(location + 2)) {
                    divide2 = memStr.get(location + 2);
                } else {
                    divide2 = numDecodingsRe(s, location + 2);
                    memStr.set(location + 2, divide2);
                }
            }
        }
        return divide2 + divide1;
    }
    return numDecodingsRe(s, 0);
};


var numDecodings = function (s) {
    if (!s || s.startsWith('0')) {
        return 0;
    }
    let dp = new Array(s.length).fill(0);
    dp[0] = 1;
    for (let i = 1; i < s.length; ++i) {
        if (dp[i] !== '0') {
            dp[i] = dp[i - 1];
        }
        let num = parseInt(s[i - 1] + s[i], 10);
        if (num >= 10 && num <= 26) {
            if (i === 1) {
                dp[i]++;
            } else {
                dp[i] += dp[i - 2];
            }
        }
    }
    return dp[s.length - 1]; 
};
// @lc code=end

