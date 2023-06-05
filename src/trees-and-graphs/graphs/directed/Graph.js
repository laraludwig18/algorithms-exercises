"use strict";

import LinkedList from "../../../linked-lists/LinkedList.js";
import Node from "./Node.js";

export default class Graph {
    #vertices

    constructor() {
        /**
         * @type {Array<Node>}
         */
        this.#vertices = [];
    }

    /**
     * Adds a node to the graph.
     * 
     * @param {Node} node - The node to be added.
     * @returns {Graph} The graph instance.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    addNode(node) {
        this.#vertices.push(node);
        return this;
    }

    /**
     * Returns an array of all nodes in the graph.
     * 
     * @returns {Array<Node>} The array of nodes.
     * @timecomplexity O(1)
     * @spacecomplexity O(1)
     */
    getNodes() {
        return this.#vertices;
    }

    /**
     * Checks if there is a route between two nodes in the graph using breadth-first search.
     * 
     * @param {Node} start - The start node.
     * @param {Node} end - The end node.
     * @returns {boolean} True if a route exists, false otherwise.
     * @timecomplexity O(V + E. V = Vertices and E = Edges)
     * @spacecomplexity O(V + E)
     */
    thereIsRouteBetweenNodes(start, end) {
        if (!start || !end) return false;
        if (start === end) return true;

        const queue = new LinkedList();

        for (const node of this.#vertices) {
            node.setUnvisited();
        }

        start.setVisiting();
        queue.add(start);

        let firstNode = null;

        while (!queue.isEmpty()) {
            firstNode = queue.deleteAtBeginning();

            if (!firstNode) {
                break;
            }

            for (const node of firstNode.getEdges()) {
                if (!node.isUnvisited()) break;
                if (node === end) return true;


                node.setVisiting();
                queue.add(node);
            }

            firstNode.setVisited();
        }

        return false;
    }
}
