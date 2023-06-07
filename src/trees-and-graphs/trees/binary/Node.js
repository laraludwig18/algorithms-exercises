"use strict";

export default class Node {
    constructor(data = null) {
        /**
         * @type {number}
         */
        this.data = data;
        /**
         * @type {Node}
         */
        this.left = null;
        /**
         * @type {Node}
         */
        this.right = null;
    }

    /**
     * Sets the left child of the current node.
     * @param {Node} left - The left child node.
     * @returns {this}
     */
    setLeftChild(left) {
        this.left = left;
        return this;
    }

    /**
     * Sets the right child of the current node.
     * @param {Node|null} right - The right child node.
     * @returns {this}
     */
    setRightChild(right) {
        this.right = right;
        return this;
    }
}
