"use strict";

import Node from "./Node.js";

export default class Stack {
    #size;
    #capacity;
    #top;
    #bottom;

    constructor(capacity = null) {
        /**
         * @type {Node}
         * @default null
         */
        this.#top = null;
        /**
         * @type {Node}
         * @default null
         */
        this.#bottom = null;
        /**
         * @type {number}
         * @default 0
         */
        this.#size = 0;
        /**
         * @type {number}
         * @default null
         */
        this.#capacity = capacity;
    }

    getBottom() {
        return this.#bottom;
    }

    getTop() {
        return this.#top;
    }

    #join(above, below) {
        if (below) below.above = above;
        if (above) above.below = below;
    }

    /**
     * Adds value to top of stack.
     * @param {any} value
     * @return {this}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    push(value) {
        if (this.isFull()) throw new Error("Stack is full.");
        this.#size++;

        const node = new Node(value);

        if (this.#size === 1) this.#bottom = node;
        this.#join(node, this.#top);
        this.#top = node;

        return this;
    }

    /**
     * Removes node from top of stack.
     * @return {any}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    pop() {
        let top = this.#top;
        this.#top = top.below;
        this.#size--;

        if (!top) return null;

        return top.value;
    }

    /**
     * Returns top node of the stack.
     * @return {this}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    peek() {
        if (this.isEmpty()) return null;

        return this.#top;
    }

    /**
     * @return {boolean}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    isEmpty() {
        return this.#size === 0;
    }

    /**
     * Returns true if the number of elements equals the set capacity, otherwise false.
     * @return {boolean}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    isFull() {
        return this.#size === this.#capacity;
    }

    /**
     * Removes node from bottom of stack.
     * @return {any}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    removeBottom() {
        let bottom = this.#bottom;
        this.#bottom = bottom.above;
        this.#size--;

        if (this.#bottom) this.#bottom.below = null;

        return bottom?.value;
    }
}
