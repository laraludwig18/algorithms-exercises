"use strict";

import assert from "node:assert/strict";
import { describe, it, before } from 'node:test';

import Graph from "../../src/trees-and-graphs/graphs/directed/Graph.js";
import Node from "../../src/trees-and-graphs/graphs/directed/Node.js";

const eNode = new Node("E");
const dNode = new Node("D");
const cNode = new Node("C");
const bNode = new Node("B");
const aNode = new Node("A");

/**
 *      A
 *    /  \
 *   B    C 
 *  /      \
 * D        E
 */


describe('there-is-route-between-nodes-directed-graph', () => {
    let graph = null;

    before(() => {
        graph = new Graph()
            .addNode(aNode.addEdge(bNode).addEdge(cNode))
            .addNode(bNode.addEdge(dNode))
            .addNode(cNode.addEdge(eNode))
            .addNode(dNode)
            .addNode(eNode);
    });

    it('should have routes between nodes', () => {
        assert.strictEqual(graph.thereIsRouteBetweenNodes(aNode, eNode), true);
        assert.strictEqual(graph.thereIsRouteBetweenNodes(aNode, dNode), true);
        assert.strictEqual(graph.thereIsRouteBetweenNodes(bNode, dNode), true);
    });

    it('should have not route between nodes', () => {
        assert.strictEqual(graph.thereIsRouteBetweenNodes(eNode, aNode), false);
        assert.strictEqual(graph.thereIsRouteBetweenNodes(cNode, dNode), false);
    });
});
