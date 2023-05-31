"use strict";

export default class TripleStack {
    #elements;
    #lengths;
    #numberOfStacks;

    constructor() {
        /**
         * @type {Array<any>}
         */
        this.#elements = [];
        /**
         * The lengths of each stack in the triple stack.
         * @type {Array<number>}
         */
        this.#lengths = [0, 0, 0];
        /**
         * @type {number}
         */
        this.#numberOfStacks = 3;
    }

    /**
     * Gets the length of a specific stack in the triple stack.
     * @param {number} stackIndex - The index of the stack (1, 2, or 3).
     * @returns {number} The length of the stack.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    #getLength(stackIndex) {
        return this.#lengths[stackIndex - 1];
    }

    /**
     * Pushes an element onto a specific stack in the triple stack.
     * @param {Object} options - The options for pushing an element.
     * @param {number} options.stackIndex - The index of the stack (1, 2, or 3).
     * @param {any} options.element - The element to be pushed onto the stack.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     * @returns {this}
     */
    push({ stackIndex, element } = {}) {
        const index = this.#getLength(stackIndex) * this.#numberOfStacks + stackIndex - 1;
        this.#elements[index] = element;
        ++this.#lengths[stackIndex - 1];

        return this;
    }

    /**
     * Pops an element from a specific stack in the triple stack.
     * @param {number} stackIndex - The index of the stack (1, 2, or 3).
     * @returns {any} The popped element, or null if the stack is empty.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    pop(stackIndex) {
        const length = this.#getLength(stackIndex);
        let element = null;

        if (length > 0) {
            let index = (length - 1) * this.#numberOfStacks + stackIndex - 1;
            element = this.#elements[index];
            this.#elements[index] = undefined;
            --this.#lengths[stackIndex - 1];
        }

        return element;
    }

    /**
     * Peeks at the top element of a specific stack in the triple stack.
     * @param {number} stackIndex - The index of the stack (1, 2, or 3).
     * @returns {any} The top element of the stack, or null if the stack is empty.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    peek(stackIndex) {
        const length = this.#getLength(stackIndex);
        let element = null;

        if (length > 0) {
            let index = (length - 1) * this.#numberOfStacks + stackIndex - 1;
            element = this.#elements[index];
        }

        return element;
    }

    /**
     * Checks if a specific stack in the triple stack is empty.
     * @param {number} stackIndex - The index of the stack (1, 2, or 3).
     * @returns {boolean} True if the stack is empty, false otherwise.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    isEmpty(stackIndex) {
        return this.#getLength(stackIndex) === 0;
    }
}
