"use strict";

import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
    #head;
    #size;

    constructor() {
        /**
         * @type {LinkedListNode}
         * @default null
         */
        this.#head = null;

        /**
         * @type {number}
         * @default 0
         */
        this.#size = 0;
    }

    /**
     * Returns first node;
     * 
     * @returns {LinkedListNode}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    peek() {
        if (this.isEmpty()) return null;
        return this.#head;
    }

    /**
     * @returns {number}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    size() {
        return this.#size;
    }

    /**
     * @returns {number}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    isEmpty() {
        return this.#size === 0;
    }

    /**
     * Adds multiple elements to the linked list.
     *
     * @param {Array<any>} elements - The elements to add.
     * @returns {this}
     * @timecomplexity O(N * M)
     * @spacecomplexity O(1)
     */
    addMany(elements) {
        if (!Array.isArray(elements) || !elements.length) {
            throw new Error("Invalid elements");
        }

        elements.forEach(element => this.add(element));

        return this;
    }

    /**
     * Adds a single element to the linked list.
     *
     * @param {any} element - The element to add.
     * @returns {this}
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    add(element) {
        const newNode = new LinkedListNode(element);

        if (!this.#head) {
            this.#head = newNode;
        } else {
            let current = this.#head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.#size++;

        return this;
    }

    /**
     * Deletes first node.
     *
     * @returns {any}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    deleteAtBeginning() {
        if (!this.#head) return null;

        const removedHead = this.#head;
        this.#head = this.#head.next;
        this.#size--;

        return removedHead.element;
    }

    /**
     * Removes duplicate elements from the linked list.
     *
     * @returns {this}
     * @timecomplexity O(N²)
     * @spacecomplexity O(1)
     */
    removeDuplicates() {
        let current = this.#head;

        while (current) {
            let runner = current;

            while (runner.next) {
                if (runner.next.element === current.element) {
                    runner.next = runner.next.next;
                    this.#size--;
                } else {
                    runner = runner.next;
                }
            }

            current = current.next;
        }

        return this;
    }

    /**
     * Returns the kth to last element from the linked list.
     *
     * @param {number} k - The position of the element to return.
     * @returns {any} The kth to last element.
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    getKthToLast(k) {
        if (!this.#head || k <= 0 || k > this.#size) return null;

        let pointer = this.#head;
        for (let i = 0; i < this.#size - k; i++) {
            pointer = pointer?.next;
        }

        return pointer.element;
    }

    /**
     * Returns the kth node from the linked list.
     *
     * @param {number} k - The position of the node to return.
     * @returns {LinkedListNode|null} The kth node or null if it doesn't exist.
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    getKthNode(k) {
        if (!this.#head || k <= 0 || k > this.#size) return null;

        let current = this.#head;
        while (k > 0 && current) {
            current = current.next;
            k--;
        }

        return current;
    }

    /**
     * Removes the middle node from the linked list.
     *
     * @returns {this}
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    removeMiddleNode() {
        if (this.#size <= 2) return this;

        const middleIndex = Math.floor((this.#size - 1) / 2);
        const previousMiddleIndex = middleIndex - 1;

        let pointer = this.#head;
        for (let i = 0; i < previousMiddleIndex; i++) {
            pointer = pointer.next;
        }

        pointer.next = pointer?.next?.next;
        this.#size--;

        return this;
    }

    /**
     * Partitions the linked list around a value.
     *
     * @param {any} value - The value to partition around.
     * @returns {this}
     * @timecomplexity O(N)
     * @spacecomplexity O(N)
     */
    partitionAroundValue(value) {
        if (this.#size <= 1) return this;

        let head = this.#head;
        let tail = this.#head;
        let current = this.#head;

        while (current) {
            let next = current.next;

            if (current.element < value) {
                current.next = head;
                head = current;
            } else {
                tail.next = current;
                tail = current;
            }

            current = next;
        }

        tail.next = null;
        this.#head = head;

        return this;
    }

    /**
     * Returns the linked list elements as a string.
     *
     * @returns {string} The string representation of the linked list.
     * @timecomplexity O(N)
     * @spacecomplexity O(N)
     */
    toString() {
        if (!this.#size) return "";

        const stringBuilder = new Array(this.#size);

        let current = this.#head;
        while (current) {
            stringBuilder.push(current.element);
            current = current.next;
        }

        return stringBuilder.join("");
    }

    /**
     * Checks if the linked list elements form a palindrome.
     *
     * @returns {boolean} True if the linked list is a palindrome, false otherwise.
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    isAPalindrome() {
        if (!this.#size) return false;

        const chars = new Set();
        let current = this.#head;
        while (current) {
            const element = current.element;
            if (chars.has(element)) chars.delete(element)
            else chars.add(element);

            current = current.next;
        }

        const existsOnlyOneCharCountEqualOrLessThanOne = chars.size <= 1;
        return existsOnlyOneCharCountEqualOrLessThanOne;
    }

    /**
     * Returns the tail and size of the linked list.
     *
     * @returns {TailAndSizeResult} The tail and size of the linked list.
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    getTailAndSize() {
        if (!this.#size) return new TailAndSizeResult();

        let tail = this.#head
        while (tail.next) {
            tail = tail.next;
        }

        return new TailAndSizeResult(tail, this.#size);
    }

    /**
     * Finds the beginning node of a loop in the linked list.
     *
     * @returns {any|null} The beginning node of the loop, or null if there is no loop.
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    findBeginningOfLoop() {
        if (!this.#size) return null;

        let slowRunner = this.#head;
        let fastRunner = this.#head;

        while (fastRunner && fastRunner.next) {
            slowRunner = slowRunner.next;
            fastRunner = fastRunner.next.next;

            const collision = slowRunner === fastRunner
            if (collision) {
                break;
            }
        }


        const noLoop = !fastRunner || !fastRunner?.next;
        if (noLoop) return null;

        slowRunner = this.#head;
        while (slowRunner !== fastRunner) {
            slowRunner = slowRunner.next;
            fastRunner = fastRunner.next;
        }

        const beginningOfLoop = fastRunner;
        return beginningOfLoop;
    }

    *[Symbol.iterator]() {
        let current = this.#head;
        while (current) {
            yield current.element;
            current = current.next;
        }
    }
}

class TailAndSizeResult {
    constructor(tail = null, size = 0) {
        /**
         * The tail node of the linked list.
         *
         * @type {LinkedListNode}
         * @default null
         */
        this.tail = tail;

        /**
         * The size of the linked list.
         *
         * @type {number}
         * @default 0
         */
        this.size = size;
    }
}
