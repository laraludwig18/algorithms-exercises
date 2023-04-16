"use strict";

import assert from "node:assert/strict";
import LinkedList from "./LinkedList.js";

assert.strictEqual(
    new LinkedList()
        .add(2)
        .add(2)
        .removeDuplicates()
        .size,
    1);

assert.strictEqual(
    new LinkedList()
        .add(2)
        .add(3)
        .removeDuplicates()
        .size,
    2);
