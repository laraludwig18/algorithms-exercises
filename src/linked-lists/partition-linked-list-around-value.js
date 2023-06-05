"use strict";

import assert from "node:assert/strict";
import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList()
    .addMany([3, 5, 8, 5, 10, 2, 1])
    .partitionAroundValue(5);

assert.strictEqual(linkedList.getKthToLast(1), 10);
assert.strictEqual(linkedList.getKthToLast(2), 5);
assert.strictEqual(linkedList.getKthToLast(3), 8);
assert.strictEqual(linkedList.getKthToLast(4), 5);
assert.strictEqual(linkedList.getKthToLast(5), 3);
