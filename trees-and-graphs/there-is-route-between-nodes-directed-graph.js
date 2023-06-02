import assert from "node:assert/strict";

import Graph from "./graphs/directed/Graph.js";
import Node from "./graphs/Node.js";

const graph = new Graph();

const eNode = new Node("E");
const dNode = new Node("D");
const cNode = new Node("C")
    .addEdge(eNode);
const bNode = new Node("B")
    .addEdge(dNode);
const aNode = new Node("A")
    .addEdge(bNode)
    .addEdge(cNode);

graph
    .addNode(aNode)
    .addNode(bNode)
    .addNode(cNode)
    .addNode(dNode)
    .addNode(eNode);

/**
 *     A
 *   B   C  
 * D       E
 */    

assert.strictEqual(graph.thereIsRouteBetweenNodes(aNode, eNode), true);
assert.strictEqual(graph.thereIsRouteBetweenNodes(aNode, dNode), true);
assert.strictEqual(graph.thereIsRouteBetweenNodes(bNode, dNode), true);
assert.strictEqual(graph.thereIsRouteBetweenNodes(eNode, aNode), false);
assert.strictEqual(graph.thereIsRouteBetweenNodes(cNode, dNode), false);
