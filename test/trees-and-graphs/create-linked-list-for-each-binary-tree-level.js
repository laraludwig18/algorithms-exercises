"use strict";

import assert from "node:assert/strict";
import { describe, it, before } from 'node:test';

import BinaryTree from "../../src/trees-and-graphs/trees/binary/BinaryTree.js";

/**
 *          1
 *       /     \ 
 *      2       3
 *    /  \    /   \
 *   4    5  6     8
 *  / \  /       
 * 7  10 9      
 */

describe('create-linked-list-for-each-binary-tree-level', () => {
    let linkedLists = null;

    before(() => {
        linkedLists = new BinaryTree()
            .insert(1)
            .insert(2)
            .insert(3)
            .insert(4)
            .insert(5)
            .insert(6)
            .insert(8)
            .insert(7)
            .insert(10)
            .insert(9)
            .createLevelLinkedList();
    });

    it('should create four linked lists', () => {
        assert.strictEqual(linkedLists.length, 4);
    });

    it('should linked lists have the same size as element per level', () => {
        assert.strictEqual(linkedLists[0].size(), 1);
        assert.strictEqual(linkedLists[1].size(), 2);
        assert.strictEqual(linkedLists[2].size(), 4);
        assert.strictEqual(linkedLists[3].size(), 3);
    });
});
