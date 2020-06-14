/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength_1 = function (beginWord, endWord, wordList) {
    let minStep = Number.MAX_SAFE_INTEGER;
    function ladderLengthRecursion(currentWord, endWord, wordList, step, visited) {
        if (currentWord === endWord) {
            minStep = Math.min(minStep, step + 1);
            return;
        }
        for (let i = 0; i < wordList.length; ++i) {
            let diff = 0;
            if (visited.has(wordList[i])) {
                continue;
            }
            for (let j = 0; j < wordList[i].length; ++j) {
                if (currentWord[j] !== wordList[i][j]) {
                    if (++diff > 1) {
                        break;
                    }
                }
            }
            if (diff === 1 && !visited.has(wordList[i])) {
                visited.add(wordList[i]);
                ladderLengthRecursion(wordList[i], endWord, wordList, step + 1, visited);
                visited.delete(wordList[i]);
            }
        }
    }
    ladderLengthRecursion(beginWord, endWord, wordList, 0, new Set());
    return minStep === Number.MAX_SAFE_INTEGER ? 0 : minStep;
};

var ladderLength = function (beginWord, endWord, wordList) {
    function ladderLengthFn(beginWord, endWord, wordList, visited) {
        let stack = [beginWord];
        let curLength = 1;
        let nextLength = 0;
        let step = 0;
        while (stack.length > 0) {
            nextLength = 0;
            for (let k = 0; k < curLength; ++k) {
                let word = stack.shift();
                if (word === endWord) {
                    return step + 1;
                }
                for (let i = 0; i < wordList.length; ++i) {
                    if (visited.has(wordList[i])) {
                        continue;
                    } else {
                        let diff = 0;
                        for (let j = 0; j < wordList[i].length; ++j) {
                            if (word[j] !== wordList[i][j]) {
                                if (++diff > 1) {
                                    break;
                                }
                            }
                        }
                        if (diff === 1) {
                            stack.push(wordList[i]);
                            visited.add(wordList[i]);
                            ++nextLength;
                        }
                    }
                }
            }
            curLength = nextLength;
            ++step;
        }
    }
    let res = ladderLengthFn(beginWord, endWord, wordList, new Set());
    return res ? res : 0;
};
// @lc code=end

