"use strict";

export default class Stack {
    constructor() {
        /**
        * @property {Array<any>}
        * @default []
        */
        this.elements = [];
    }

    /**
    * Time complexity: O(1)
    * Space complexity: O(1)
    * 
    * Add element to top of stack.
    * @param {any} element
    * @return {this}
    */
    push(element) {
        this.elements.push(element);
        return this;
    }

    /**
    * Time complexity: O(1)
    * Space complexity: O(1)
    * 
    * Remove element from top of stack.
    * @return {any}
    */
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty.");
        }

        return this.elements.pop();
    }

    /**
    * Time complexity: O(1)
    * Space complexity: O(1)
    * 
    * Return top element of the stack.
    * @return {this}
    */
    peek() {
        if (this.isEmpty()) return null;

        const lastElementIndex = this.elements.length - 1;
        return this.elements[lastElementIndex];
    }

    /**
    * Time complexity: O(1)
    * Space complexity: O(1)
    * 
    * @return {boolean}
    */
    isEmpty() {
        return this.elements.length === 0;
    }
}
