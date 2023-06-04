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
}
