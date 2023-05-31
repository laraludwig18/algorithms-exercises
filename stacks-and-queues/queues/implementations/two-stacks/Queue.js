import Stack from "../../../stacks/implementations/array/Stack.js";

export default class Queue {
    #stackNewest;
    #stackOldest;

    constructor() {
        /**
         * The newest stack to enqueue new elements.
         * @type {Stack}
         */
        this.#stackNewest = new Stack();
        /**
         * The oldest stack to dequeue elements.
         * @type {Stack}
         */
        this.#stackOldest = new Stack();
    }

    /**
     * Returns the number of elements in the queue.
     * @returns {number} The size of the queue.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    size() {
        return this.#stackNewest.size() + this.#stackOldest.size();
    }

    /**
     * @param {any} value - The element to enqueue.
     * @returns {this}
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    enqueue(value) {
        this.#stackNewest.push(value);
        return this;
    }

    /**
     * Returns the element at the front of the queue without removing it.
     * @returns {any}
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    peek() {
        this.#shiftStacks();
        return this.#stackOldest.peek();
    }

    /**
     * Removes and returns the element at the front of the queue.
     * @returns {any}
     * @timecomplexity O(N)
     * @spacecomplexity O(1)
     */
    dequeue() {
        this.#shiftStacks();
        return this.#stackOldest.pop();
    }

    /**
     * Helper method to shift elements from the newest stack to the oldest stack.
     */
    #shiftStacks() {
        if (this.#stackOldest.isEmpty()) {
            while (!this.#stackNewest.isEmpty()) {
                this.#stackOldest.push(this.#stackNewest.pop());
            }
        }
    }
}
