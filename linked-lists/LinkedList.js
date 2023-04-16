"use strict";

import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
    * Add multiple elements
    *  
    * @param {array} elements
    * @return {this}
    */
    addMany(elements) {
        elements.forEach(element => this.add(element));

        return this;
    }

    /**
    * Add single element
    *  
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
     * Return kth to last element
     * 
     * Time complexity: O(N)
     * Space complexity: O(1)
     * 
     * @param {number} k Position to return element
     * @return {any}
     */
    getKthToLast(k) {
        if (!this.head || k <= 0 || k > this.size) return null;

        let p1 = this.head;
        let p2 = this.head;

        for (let i = 0; i < k; i++) {
            p1 = p1?.next;
        }

        while (p1) {
            p1 = p1.next;
            p2 = p2.next;
        }

        return p2.element;
    }
}
