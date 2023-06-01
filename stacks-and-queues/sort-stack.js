"use strict";

import assert from "node:assert/strict";
import Stack from "./stacks/implementations/array/Stack.js";

const stack = new Stack()
    .push(10)
    .push(15)
    .push(2)
    .push(11);

assert.strictEqual(
    stack.sortAscending().peek(),
    2);
