"use strict";

import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
    constructor() {
        /**
        * @property {LinkedListNode}
        * @default null
        * @private
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
            throw new Error('Invalid elements');
        }

        elements.forEach(element => this.add(element));

        return this;
    }

    /**
    * @property {Function} add Add single element
    * @param {any} element
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
    * @return {any}
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
    * @property {Function} removeMiddleNode Remove a node in the middle, unless the first and last
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
}
