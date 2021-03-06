/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hashTable = {}
        this.count = 0
        this.dummyHead = new ListNode()
        this.dummyTail = new ListNode()
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }

    get(key) {
        let node = this.hashTable[key]
        if (node == null) return -1
        this.moveToHead(node)
        return node.value
    }

    put(key, value) {
        let node = this.hashTable[key]
        if (node == null) {
            let newNode = new ListNode(key, value)
            this.hashTable[key] = newNode
            this.addToHead(newNode)
            this.count++
            if (this.count > this.capacity) {
                this.removeLRUItem()
            }
        } else {
            node.value = value
            this.moveToHead(node)
        }
    }

    moveToHead(node) {
        this.removeFromList(node)
        this.addToHead(node)
    }

    removeFromList(node) {
        let tempForPrev = node.prev
        let tempForNext = node.next
        tempForPrev.next = tempForNext
        tempForNext.prev = tempForPrev
    }

    addToHead(node) {
        node.prev = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
    }

    removeLRUItem() {
        let tail = this.popTail()
        delete this.hashTable[tail.key]
        this.count--
    }

    popTail() {
        let tailItem = this.dummyTail.prev
        this.removeFromList(tailItem)
        return tailItem
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

