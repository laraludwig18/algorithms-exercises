"use strict";

import Node from "../Node.js";
import LinkedList from "../../../linked-lists/LinkedList.js";

export default class BinaryTree {
    constructor() {
        /**
         * @type {Node|null}
         */
        this.root = null;
    }

    /**
     * Inserts a new node with the given data into the binary tree.
     * @param {number} data - The data for the new node.
     * @returns {this}
     */
    insert(data) {
        const node = new Node(data);

        if (!this.root) this.root = node;
        else this.#insertNode(node);

        return this;
    }

    /**
     * Inserts a new node into the binary tree using level-order traversal.
     * @param {Node}
     * @complexity Time: O(n), Space: O(m = number of nodes per level)
     */
    #insertNode(newNode) {
        const queue = [];
        queue.push(this.root);

        while (queue.length) {
            const node = queue.shift();

            if (!node.left) {
                node.setLeftChild(newNode);
                break;
            } else {
                queue.push(node.left);
            }

            if (!node.right) {
                node.setRightChild(newNode);
                break;
            } else {
                queue.push(node.right);
            }
        }
    }

    /**
     * Creates an array of linked lists, where each linked list contains the nodes of one level in the binary tree.
     * @returns {LinkedList[]} The array of linked lists.
     * @complexity Time: O(n), Space: O(n)
     */
    createLevelLinkedList() {
        const result = [];

        let current = new LinkedList();
        if (this.root) current.add(this.root);

        while (current.size()) {
            result.push(current);

            const parents = current;
            current = new LinkedList();

            for (const parent of parents) {
                if (parent.left) current.add(parent.left);
                if (parent.right) current.add(parent.right);
            }
        }

        return result;
    }
    
    /**
     * Recursively checks the height of the given node and determines if the tree is balanced.
     * @param {Node} node - The node to check the height for.
     * @returns {number} - The height of the node if it is balanced, or Number.MIN_VALUE if it is unbalanced.
     * @complexity Time: O(n), Space: O(h = height of the tree)
     */
    #checkHeight(node) {
        if (!node) return -1;

        const leftHeight = this.#checkHeight(node.left);
        if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE;

        const rightHeight = this.#checkHeight(node.right);
        if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE;

        const heightDiff = leftHeight - rightHeight;

        if (Math.abs(heightDiff) > 1) return Number.MIN_VALUE;

        return Math.max(leftHeight, rightHeight) + 1;
    }

    /**
     * Checks if the tree is balanced.
     * @param {Node} [node=this.root] - The node to start checking from. If not provided, the root of the tree is used.
     * @returns {boolean} - True if the tree is balanced, false otherwise.
     * @complexity Time: O(n), Space: O(h = height of the tree)
     */
    isBalanced(node = this.root) {
        return this.#checkHeight(node) !== Number.MIN_VALUE;
    }
}
