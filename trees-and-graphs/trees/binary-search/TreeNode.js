export default class TreeNode {
    data;
    left;
    right;

    constructor(data = null) {
        /**
         * @type {number}
         */
        this.data = data;
    }

     /**
      * Creates a minimal binary search tree from an ascending sorted array.
      * @param {Array<number>} array - The array of elements to construct the tree from.
      * @returns {TreeNode|null} - The root node of the created binary search tree, or null if the array is empty.
      * @complexity Time: O(n), Space: O(n)
      */
    static createMinimalBinarySearchTree(array) {
        if (!array?.length) return null;

        const startIndex = 0;
        const endIndex = array?.length - 1;
        return TreeNode.#createMinimalBinarySearchTree({ array, startIndex, endIndex });
    }

    /**
     * Private helper function to create a minimal binary search tree recursively.
     * @param {object} options - An object containing the array, startIndex, and endIndex.
     * @param {Array} options.array - The array of elements.
     * @param {number} options.startIndex - The starting index of the current subarray.
     * @param {number} options.endIndex - The ending index of the current subarray.
     * @returns {TreeNode|null} - The root node of the created binary search tree, or null if the subarray is empty.
     * @complexity Time: O(n), Space: O(n)
     */
    static #createMinimalBinarySearchTree({ array, startIndex, endIndex } = {}) {
        if (endIndex < startIndex) return null;

        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const root = new TreeNode(array[middleIndex]);

        const left = TreeNode.#createMinimalBinarySearchTree({ array, startIndex, endIndex: middleIndex - 1 });
        const right = TreeNode.#createMinimalBinarySearchTree({ array, startIndex: middleIndex + 1, endIndex });
        root
            .setLeftChild(left)
            .setRightChild(right);

        return root;
    }

    /**
     * Sets the left child of the current node.
     * @param {TreeNode} left - The left child node.
     * @returns {this}
     */
    setLeftChild(left) {
        this.left = left;
        return this;
    }

    /**
     * Sets the right child of the current node.
     * @param {TreeNode|null} right - The right child node.
     * @returns {this}
     */
    setRightChild(right) {
        this.right = right;
        return this;
    }
}
