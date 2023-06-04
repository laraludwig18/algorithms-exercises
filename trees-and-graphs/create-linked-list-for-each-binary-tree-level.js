import assert from "node:assert/strict";

import BinaryTree from "./trees/binary/BinaryTree.js";

const binaryTree = new BinaryTree()
    .insert(1)
    .insert(2)
    .insert(3)
    .insert(4)
    .insert(5)
    .insert(6)
    .insert(8)
    .insert(7)
    .insert(10)
    .insert(9);

/**
 *          1
 *       /     \ 
 *      2       3
 *    /  \    /   \
 *   4    5  6     8
 *  / \  /       
 * 7  10 9      
 */

const linkedLists = binaryTree.createLevelLinkedList();

assert.strictEqual(linkedLists.length, 4);

assert.strictEqual(linkedLists[0].size(), 1);
assert.strictEqual(linkedLists[1].size(), 2);
assert.strictEqual(linkedLists[2].size(), 4);
assert.strictEqual(linkedLists[3].size(), 3);
