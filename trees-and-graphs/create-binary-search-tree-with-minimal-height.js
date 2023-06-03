import assert from "node:assert/strict";

import TreeNode from "./trees/binary-search/TreeNode.js";

const root = TreeNode.createMinimalBinarySearchTree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/**
 *          5
 *       /     \ 
 *      2       8
 *    /  \    /   \
 *   0    3  6     9
 *    \    \   \     \
 *     1    4    7    10
 */ 

assert.strictEqual(root.data, 5);
assert.strictEqual(root.left.data , 2);
assert.strictEqual(root.left.left.data , 0);
assert.strictEqual(root.left.left.right.data , 1);
assert.strictEqual(root.left.right.data , 3);
assert.strictEqual(root.left.right.right.data , 4);
assert.strictEqual(root.right.data , 8);
assert.strictEqual(root.right.left.data , 6);
assert.strictEqual(root.right.left.right.data , 7);
assert.strictEqual(root.right.right.data , 9);
assert.strictEqual(root.right.right.right.data , 10);
