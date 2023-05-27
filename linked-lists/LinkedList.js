"use strict";

import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
    constructor() {
        /**
        * @property {LinkedListNode}
        * @default null
        */
        this.head = null;
        /**
        * @property {number}
        * @default 0
        */
        this.size = 0;
    }

    /** 
    * @property {Function} addMany Add multiple elements
    * @param {Array<number>} elements
    * @return {this}
    */
    addMany(elements) {
        if (!Array.isArray(elements) || !elements.length) {
            throw new Error("Invalid elements");
        }

        elements.forEach(element => this.add(element));

        return this;
    }

    /**
    * @property {Function} add Add single element
    * @param {string | number} element
    * @return {this}
    */
    add(element) {
        const newNode = new LinkedListNode(element);

        if (!this.head)
            this.head = newNode;
        else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;

        return this;
    }

    /**
    * Time complexity: O(N²)
    * Space complexity: O(1)
    * 
    * @property {Function} removeDuplicates Remove duplicate elements
    * @return {this}
    */
    removeDuplicates() {
        let current = this.head;

        while (current) {
            let runner = current;

            while (runner.next) {
                if (runner.next.element === current.element) {
                    runner.next = runner.next.next;
                    this.size--;
                } else {
                    runner = runner.next;
                }
            }

            current = current.next;
        }

        return this;
    }

    /**
    * Time complexity: O(N)
    * Space complexity: O(1)
    * 
    * @property {Function} getKthToLast Return kth to last element
    * @param {number} k Position to return element
    * @return {string | number | null}
    */
    getKthToLast(k) {
        if (!this.head || k <= 0 || k > this.size) return null;

        let pointer = this.head;
        for (let i = 0; i < this.size - k; i++) {
            pointer = pointer?.next;
        }

        return pointer.element;
    }

    /**
    * Time complexity: O(N)
    * Space complexity: O(1)
    * 
    * @property {Function} getKthNode Return kth node
    * @param {number} k Position to return element
    * @return {LinkedListNode | null}
    */
    getKthNode(k) {
        if (!this.head || k <= 0 || k > this.size) return null;

        let current = this.head;
        while (k > 0 && current) {
            current = current.next;
            k--;
        }

        return current;
    }

    /**
    * Time complexity: O(N)
    * Space complexity: O(1)
    * 
    * @property {Function} removeMiddleNode Remove a node in the middle, unless the first and last.
    * @return {this}
    */
    removeMiddleNode() {
        if (this.size <= 2) return this;

        const middleIndex = Math.floor((this.size - 1) / 2);
        const previousMiddleIndex = middleIndex - 1;

        let pointer = this.head;
        for (let i = 0; i < previousMiddleIndex; i++) {
            pointer = pointer.next;
        }

        pointer.next = pointer?.next?.next;
        this.size--;

        return this;
    }

    /**
    * Time complexity: O(N)
    * Space complexity: O(N)
    * 
    * @property {Function} partitionAroundValue Partition a linked list around a value,
    * such that all nodes less than value come before all nodes greater or equal to.
    * @return {this}
    */
    partitionAroundValue(value) {
        if (this.size <= 1) return this;

        let head = this.head;
        let tail = this.head;
        let current = this.head;

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
        this.head = head;

        return this;
    }

    /**
    * Time complexity: O(N + M)
    * Space complexity: O(N + M)
    * 
    * @property {Function} toString Return elements in string format. Ex: 1 -> 2 -> 3 = "123".
    * @return {string}
    */
    toString() {
        if (!this.size) return "";

        const stringBuilder = new Array(this.size);

        let current = this.head;
        while (current) {
            stringBuilder.push(current.element);
            current = current.next;
        }

        return stringBuilder.join("");
    }

    /**
    * Time complexity: O(N)
    * Space complexity: O(N)
    * 
    * @property {Function} isAPalindrome Check if linked list elements are a palindrome.
    * A palindrome is a word, phrase, number, or sequence of characters that reads the same way forwards and backwards.
    * @return {boolean} True if linked list elements are a palindrome, otherwise false.
    */
    isAPalindrome() {
        if (!this.size) return false;

        const chars = new Set();
        let current = this.head;
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
    * Time complexity: O(N)
    * Space complexity: O(1)
    * 
    * @property {Function} getTailAndSize Return TailAndSizeResult class with tail element and size properties.
    * @return {TailAndSizeResult}
    */
    getTailAndSize() {
        if (!this.size) return new TailAndSizeResult();

        let current = this.head
        while (current.next) {
            current = current.next;
        }

        return new TailAndSizeResult(current, this.size);
    }

    /**
    * Time complexity: O(N)
    * Space complexity: O(1)
    * 
    * @property {Function} findBeginningOfLoop Return node at the beginning of the loop (if one exists), otherwise null.
    * @return {string | number | null}
    */
    findBeginningOfLoop() {
        if (!this.size) return null;

        let slowRunner = this.head;
        let fastRunner = this.head;

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

        slowRunner = this.head;
        while (slowRunner !== fastRunner) {
            slowRunner = slowRunner.next;
            fastRunner = fastRunner.next;
        }

        const beginningOfLoop = fastRunner;
        return beginningOfLoop;
    }
}

class TailAndSizeResult {
    constructor(tail = null, size = 0) {
        /**
        * @property {LinkedListNode}
        * @default null
        */
        this.tail = tail;
        /**
        * @property {number}
        * @default 0
        */
        this.size = size;
    }
}
