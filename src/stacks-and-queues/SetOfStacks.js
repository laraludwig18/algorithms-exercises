"use strict";

import Stack from "./stacks/doubly-linked-list/Stack.js";

export default class SetOfStacks {
    #stacks;
    #capacityPerStack;

    constructor(capacityPerStack = 30) {
        /**
         * @type {number}
         * @default 30
         */
        this.#capacityPerStack = capacityPerStack;
        /**
         * @type {Array<Stack>}
         * @default []
         */
        this.#stacks = [];
    }

    /**
     * Pushes an element onto the set of stacks.
     *
     * @param {any} element - The element to push.
     * @returns {this}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    push(element) {
        const lastStack = this.#getLastStack();

        if (lastStack && !lastStack.isFull()) {
            lastStack.push(element);
        } else {
            const newStack = new Stack(this.#capacityPerStack).push(element);

            this.#stacks.push(newStack);
        }

        return this;
    }

    /**
     * Pops the top element from the set of stacks.
     *
     * @returns {any|null} The popped element, or null if the set of stacks is empty.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    pop() {
        const lastStack = this.#getLastStack();
        let element = null;

        if (lastStack) element = lastStack.pop();

        if (lastStack.isEmpty()) this.#stacks.pop();

        return element;
    }

    /**
     * Pops the top element from a specific stack in the set of stacks.
     *
     * @param {number} stackIndex - The index of the stack to pop from.
     * @returns {any|null} The popped element, or null if the specified stack is empty or doesn't exist.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    popAt(stackIndex) {
        const removeTop = true;
        return this.#leftShift(stackIndex, removeTop);
    }

    /**
     * Removes an item from one of the stacks in the stack set, 
     * maintaining the integrity of the data structure by adjusting the stack arrangement if necessary.
     * @param {number} stackIndex.
     * @param {boolean} [removeTop=false].
     * @returns {any} Removed item.
     * @timecomplexity O(N)
     * @spacecomplexity O(k = quantity of stacks.)
     */
    #leftShift(stackIndex, removeTop = false) {
        const stack = this.#stacks[stackIndex];

        if (!stack) return null;

        const removedItem = removeTop
            ? stack.pop()
            : stack.removeBottom();

        if (stack.isEmpty()) {
            const deleteCount = 1;
            this.#stacks.splice(stackIndex, deleteCount);
        } else if (this.#stacks.length > (stackIndex + 1)) {
            const removeTop = false;
            const value = this.#leftShift(stackIndex + 1, removeTop);
            stack.push(value);
        }

        return removedItem;
    }

    /**
     * Returns the number of stacks in the set of stacks.
     *
     * @returns {number} The number of stacks.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    getStackQuantity() {
        return this.#stacks.length;
    }

    /**
     * @returns {bool}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    isEmpty() {
        const lastStack = this.#getLastStack();
        return !lastStack || lastStack?.isEmpty();
    }

    /**
     * Returns the last stack in the set of stacks.
     *
     * @returns {Stack|null} The last stack, or null if the set of stacks is empty.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    #getLastStack() {
        if (!this.#stacks.length) return null;

        const lastElementIndex = this.#stacks.length - 1;
        return this.#stacks[lastElementIndex];
    }
}
