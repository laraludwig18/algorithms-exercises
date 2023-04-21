"use strict";

import assert from "node:assert/strict";
import LinkedList from "./LinkedList.js";

assert.strictEqual(
    new LinkedList()
        .addMany(["a", "b"])
        .removeMiddleNode()
        .size,
    2);

assert.strictEqual(
    new LinkedList()
        .addMany(["a", "b", "c", "d", "e", "f"])
        .removeMiddleNode()
        .getKthToLast(4),
    "b");

assert.strictEqual(
    new LinkedList()
        .addMany(["a", "b", "c"])
        .removeMiddleNode()
        .getKthToLast(2),
    "a");
