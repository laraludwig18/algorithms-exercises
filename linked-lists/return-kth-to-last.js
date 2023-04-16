"use strict";

import assert from "node:assert/strict";
import LinkedList from "./LinkedList.js";

assert.strictEqual(
    new LinkedList()
        .addMany([5, 6, 7, 8, 9])
        .getKthToLast(2),
    8);

assert.strictEqual(
    new LinkedList()
        .addMany([5, 6, 7, 8, 9])
        .getKthToLast(5),
    5);

assert.strictEqual(
    new LinkedList()
        .addMany([5, 6, 7, 8, 9])
        .getKthToLast(6),
    null);
