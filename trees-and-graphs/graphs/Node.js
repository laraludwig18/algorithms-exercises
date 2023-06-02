export default class Node {
    #state;
    #vertex;
    #edges;

    constructor(vertex = null) {
        /**
         * @type {NodeState}
         */
        this.#state = NodeState.Unvisited;
        /**
         * @type {string}
         */
        this.#vertex = vertex;
        /**
         * @type {Array<Node>}
         */
        this.#edges = [];
    }

    /**
     * Checks if the node is in the unvisited state.
     * @returns {boolean} True if the node is unvisited, false otherwise.
     */
    isUnvisited() {
        return this.#state === NodeState.Unvisited;
    }

    /**
     * Returns the array of edges (adjacent nodes) of the node.
     * @returns {Array<Node>} The array of edges.
     */
    getEdges() {
        return this.#edges;
    }

    /**
     * Returns the vertex value of the node.
     * @returns {string} The vertex value.
     */
    getVertex() {
        return this.#vertex;
    }

    /**
     * Adds an edge (adjacent node) to the node.
     * @param {Node} edge - The edge to be added.
     * @returns {this}
     * @timecomplexity O(1)
     * @spacecomplexity O(E = Edges)
     */
    addEdge(edge) {
        this.#edges.push(edge);
        return this;
    }

    setUnvisited() {
        this.#state = NodeState.Unvisited;
    }

    setVisiting() {
        this.#state = NodeState.Visiting;
    }

    setVisited() {
        this.#state = NodeState.Visited;
    }
}

/**
 * Possible states of a Node.
 * @enum {string}
 */
const NodeState = {
    Unvisited: "Unvisited",
    Visited: "Visited",
    Visiting: "Visiting"
}
