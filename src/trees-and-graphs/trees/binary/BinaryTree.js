"use strict";

import Node from "./Node.js";
import LinkedList from "../../../linked-lists/LinkedList.js";

export default class BinaryTree {
    #root;

    constructor(root = null) {
        /**
         * @type {Node|null}
         */
        this.#root = root;
    }

    /**
     * Creates a minimal binary search tree from an ascending sorted array.
     * @param {Array<number>} array - The array of elements to construct the tree from.
     * @returns {BinaryTree} - The binary tree created, or null if the array is empty.
     * @complexity Time: O(N), Space: O(N)
     */
    static createSearchTreeFromArray(array) {
        if (!array?.length) return null;

        const startIndex = 0;
        const endIndex = array?.length - 1;
        const root = BinaryTree.#createSearchTreeFromArray({ array, startIndex, endIndex });

        const binaryTree = new BinaryTree(root);
        return binaryTree;
    }

    /**
     * Private helper function to create a minimal binary search tree recursively.
     * @param {object} options - An object containing the array, startIndex, and endIndex.
     * @param {Array} options.array - The array of elements.
     * @param {number} options.startIndex - The starting index of the current subarray.
     * @param {number} options.endIndex - The ending index of the current subarray.
     * @returns {Node|null} - The root node of the created binary search tree, or null if the subarray is empty.
     * @complexity Time: O(N), Space: O(N)
     */
    static #createSearchTreeFromArray({ array, startIndex, endIndex } = {}) {
        if (endIndex < startIndex) return null;

        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middleNode = new Node(array[middleIndex]);

        const left = BinaryTree.#createSearchTreeFromArray({ array, startIndex, endIndex: middleIndex - 1 });
        const right = BinaryTree.#createSearchTreeFromArray({ array, startIndex: middleIndex + 1, endIndex });
        middleNode
            .setLeftChild(left)
            .setRightChild(right);

        return middleNode;
    }

    /**
     * @returns {Node}
     */
    getRoot() {
        return this.#root;
    }

    /**
     * Inserts a new node with the given data into the binary tree.
     * @param {number} data - The data for the new node.
     * @returns {this}
     */
    insert(data) {
        const node = new Node(data);

        if (!this.#root) this.#root = node;
        else this.#insertNode(node);

        return this;
    }

    /**
     * Inserts a new node into the binary tree using level-order traversal.
     * @param {Node}
     * @complexity Time: O(N), Space: O(M = number of nodes per level)
     */
    #insertNode(newNode) {
        const queue = [];
        queue.push(this.#root);

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
     * @complexity Time: O(N), Space: O(N)
     */
    createLevelLinkedList() {
        const result = [];

        let current = new LinkedList();
        if (this.#root) current.add(this.#root);

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
     * Checks if the tree is balanced.
     * @param {Node} - The node to start checking from. If not provided, the root of the tree is used.
     * @returns {boolean} - True if the tree is balanced, false otherwise.
     * @complexity Time: O(N), Space: O(H = height of the tree)
     */
    isBalanced(node = this.#root) {
        return this.#checkHeight(node) !== Number.MIN_VALUE;
    }

    /**
     * Recursively checks the height of the given node and determines if the tree is balanced.
     * @param {Node} node - The node to check the height for.
     * @returns {number} - The height of the node if it is balanced, or Number.MIN_VALUE if it is unbalanced.
     * @complexity Time: O(N), Space: O(H = height of the tree)
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
     * Checks if the binary tree is a valid binary search tree.
     *
     * @returns {boolean} True if the binary tree is a valid binary search tree, false otherwise.
     * @complexity Time: O(N), Space: O(log N)
     */
    isSearchTree() {
        return this.#checkIsSearchTree({
            node: this.#root,
            min: null,
            max: null
        });
    }

    /**
     * Recursively checks if a given node and its children form a valid binary search tree.
     *
     * @param {object} options - The options for checking if the binary tree is a valid binary search tree.
     * @param {Node} options.node - The current node to check.
     * @param {number|null} options.min - The minimum value that the current node can have.
     * @param {number|null} options.max - The maximum value that the current node can have.
     * @returns {boolean} True if the binary tree is a valid binary search tree, false otherwise.
     * @complexity Time: O(N), Space: O(log N)
     */
    #checkIsSearchTree({ node, min, max } = {}) {
        if (!node) return true;

        if ((min && node.data <= min) || (max && node.data > max)) return false;

        const areLeftNodesSmallerOrEqualToMax = this.#checkIsSearchTree({ node: node.left, min, max: node.data });
        const areRightNodesGreaterThanMin = this.#checkIsSearchTree({ node: node.right, min: node.data, max });

        return (areLeftNodesSmallerOrEqualToMax && areRightNodesGreaterThanMin);
    }
}
