/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @时间复杂度 O(N)
 * @空间复杂度 O(1) 尽管使用了额外的空间，但表的大小都保持不变
 */
var isAnagram_1 = function (s, t) {
    let map = {};
    for (let i = 0; i < s.length; ++i) {
        if (!map.hasOwnProperty(s[i])) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for (let i = 0; i < t.length; ++i) {
        if (!map.hasOwnProperty(t[i])) {
            return false;
        } else {
            map[t[i]]--;
            if (map[t[i]] < 0) {
                return false;
            }
        }
    }
    let keys = Object.keys(map);
    for (let i = 0; i < keys.length; ++i) {
        if (map[keys[i]] !== 0) {
            return false;
        }
    }
    return true;
};
// console.log(isAnagram("anagram", "nagaram"))


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @时间复杂度 O(NlogN)
 * @空间复杂度 O(1) 
 */
var isAnagram_2 = function (s, t) {
    s = Array.from(s).sort();
    t = Array.from(t).sort();
    return s.join('') === t.join('');
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @时间复杂度 O(NlogN)
 * @空间复杂度 O(1) 
 */
var isAnagram = function (s, t) {
    const map = {};
    s.split('').forEach(c => map[c] = map[c] ? map[c] + 1 : 1);
    t.split('').forEach(c => map[c] = map[c] ? map[c] - 1 : 1);
    return Object.keys(map).every(pro => map[pro] === 0);
};
// @lc code=end

