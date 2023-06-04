import Node from "../Node.js";

export default class BinarySearchTree {
    constructor() {
        /**
         * @type {Node|null}
         */
        this.root = null;
    }

    /**
      * Creates a minimal binary search tree from an ascending sorted array.
      * @param {Array<number>} array - The array of elements to construct the tree from.
      * @returns {Node|null} - The root node of the created binary search tree, or null if the array is empty.
      * @complexity Time: O(n), Space: O(n)
      */
    static createFromArray(array) {
        if (!array?.length) return null;

        const startIndex = 0;
        const endIndex = array?.length - 1;
        const root = BinarySearchTree.#createFromArray({ array, startIndex, endIndex });

        if (!this.root) this.root = root;

        return root;
    }

    /**
     * Private helper function to create a minimal binary search tree recursively.
     * @param {object} options - An object containing the array, startIndex, and endIndex.
     * @param {Array} options.array - The array of elements.
     * @param {number} options.startIndex - The starting index of the current subarray.
     * @param {number} options.endIndex - The ending index of the current subarray.
     * @returns {Node|null} - The root node of the created binary search tree, or null if the subarray is empty.
     * @complexity Time: O(n), Space: O(n)
     */
    static #createFromArray({ array, startIndex, endIndex } = {}) {
        if (endIndex < startIndex) return null;

        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middleNode = new Node(array[middleIndex]);
        
        const left = BinarySearchTree.#createFromArray({ array, startIndex, endIndex: middleIndex - 1 });
        const right = BinarySearchTree.#createFromArray({ array, startIndex: middleIndex + 1, endIndex });
        middleNode
            .setLeftChild(left)
            .setRightChild(right);

        return middleNode;
    }
}
