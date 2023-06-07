"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import BinaryTree from "../../src/trees-and-graphs/trees/binary/BinaryTree.js";

describe('validate-binary-search-tree', () => {
    it('should return true if is a binary search tree', () => {
        /**
         *          5
         *       /     \ 
         *      2       8
         *    /  \    /   \
         *   0    3  6     9
         *    \    \   \     \
         *     1    4    7    10
         */

        const binaryTree = BinaryTree.createSearchTreeFromArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        assert.strictEqual(binaryTree.isSearchTree(), true);
    });

    it('should return false if is not a binary search tree', () => {
        /**
         *          1
         *       /     \ 
         *      2       3
         *    /  \    /   \
         *   4    5  6     8
         *  / \  /       
         * 7  10 9      
         */

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

        assert.strictEqual(binaryTree.isSearchTree(), false);
    });
}); 
