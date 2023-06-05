"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import Stack from "../../src/stacks-and-queues/stacks/array/Stack.js";

describe("sort-stack", () => {
    it("should return minimal element as top", () => {
        const stack = new Stack()
            .push(10)
            .push(15)
            .push(2)
            .push(11);

        assert.strictEqual(stack.sortAscending().peek(), 2);
    });
});
