/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let c of word) {
        if (!node[c]) {
            node[c] = {};
        }
        node = node[c];
    }
    if (!('#' in node)) {
        node['#'] = 0;
    }
    node['#']++;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.root;
    for (let c of word) {
        if (!node[c]) {
            return false;
        }
        node = node[c];
    }
    if (!node['#']) {
        return false;
    } else {
        return true;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    for (let c of prefix) {
        if (!node[c]) {
            return false;
        }
        node = node[c];
    }
    return true;
};

Trie.prototype.most = function () {
    let max = 0;
    let maxWord = '';
    function visited(node, word) {
        if (node['#']) {
            if (node['#'] > max) {
                max = node['#'];
                maxWord = word;
            }
            return;
        }
        for (let i in node) {
            visited(node[i], word + i);
        }
    }
    visited(this.root, '');
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

