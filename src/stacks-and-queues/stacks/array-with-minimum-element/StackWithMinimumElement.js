"use strict";

import Stack from "../array/Stack.js";

export default class StackWithMinimumElement extends Stack {
    constructor() {
        super();

        /**
         * Additional stack to save minimum elements.
         * @type {Array<any>}
         * @default []
         */
        this.minimumElements = new Stack();
    }

    /**
     * Add element to top of stack.
     * @param {any} element
     * @return {this}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    push(element) {
        if (!this.getMinimumElement() || element <= this.getMinimumElement()) {
            this.minimumElements.push(element);
        }

        return super.push(element);
    }

    /**
     * Remove element from top of stack.
     * @return {any}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    pop() {
        const element = super.pop();

        if (element === this.getMinimumElement()) {
            this.minimumElements.pop();
        }

        return element;
    }

    /**
     * @return {any}
     * @timecomplexity O(1)
     * @spacecomplexity O(N)
     */
    getMinimumElement() {
        if (this.minimumElements.isEmpty()) return null;

        return this.minimumElements.peek();
    }
}
