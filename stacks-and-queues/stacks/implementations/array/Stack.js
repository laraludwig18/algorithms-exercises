"use strict";

export default class Stack {
    #elements;
    #capacity;

    constructor(capacity = null) {
        /**
         * @type {Array<any>}
         * @default []
         */
        this.#elements = [];
        /**
         * @type {number}
         * @default null
         */
        this.#capacity = capacity;
    }

    /**
     * Adds element to top of stack.
     * @param {any} element
     * @return {this}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    push(element) {
        if (this.isFull()) throw new Error("Stack is full.");

        this.#elements.push(element);
        return this;
    }

    /**
     * Removes element from top of stack.
     * @return {any}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    pop() {
        if (this.isEmpty()) return null;

        return this.#elements.pop();
    }

    /**
     * Returns top element of the stack.
     * @return {this}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    peek() {
        if (this.isEmpty()) return null;

        const lastElementIndex = this.#elements.length - 1;
        return this.#elements[lastElementIndex];
    }

    /**
     * @return {number}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    size() {
        return this.#elements.length;
    }

    /**
     * @return {boolean}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    isEmpty() {
        return this.#elements.length === 0;
    }

    /**
     * Returns true if the number of elements equals the set capacity, otherwise false.
     * @return {boolean}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    isFull() {
        return this.#elements.length === this.#capacity;
    }
}
