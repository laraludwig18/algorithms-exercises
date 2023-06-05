"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import BinaryTree from "../../src/trees-and-graphs/trees/binary/BinaryTree.js";

describe('check-binary-tree-is-balanced', () => {
    it('should return true if a binary tree is balanced', () => {
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

        assert.strictEqual(binaryTree.isBalanced(), true);
    });
}); 
