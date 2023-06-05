"use strict";

import assert from "node:assert/strict";
import { describe, it, beforeEach } from 'node:test';

import TripleStack from "../../src/stacks-and-queues/stacks/three-stack-in-one-array/TripleStack.js";

describe("single-array-to-implement-three-stacks", () => {
    const firstStackIndex = 1;
    const secondStackIndex = 2;
    const thirdStackIndex = 3;
    let tripleStack = null;

    beforeEach(() => {
        tripleStack = new TripleStack()
            .push({ stackIndex: firstStackIndex, element: 7 })
            .push({ stackIndex: firstStackIndex, element: 4 })
            .push({ stackIndex: secondStackIndex, element: 3 })
            .push({ stackIndex: thirdStackIndex, element: 1 });
    });

    describe("peek", () => {
        it("should return top element", () => {
            tripleStack.pop(firstStackIndex);

            assert.strictEqual(tripleStack.peek(firstStackIndex), 7);
            assert.strictEqual(tripleStack.peek(secondStackIndex), 3);
            assert.strictEqual(tripleStack.peek(thirdStackIndex), 1);
        });
    });

    describe("isEmpty", () => {
        it("should return if stack is empty", () => {
            assert.strictEqual(tripleStack.isEmpty(firstStackIndex), false);
            assert.strictEqual(tripleStack.isEmpty(secondStackIndex), false);

            tripleStack.pop(thirdStackIndex);

            assert.strictEqual(tripleStack.isEmpty(thirdStackIndex), true);
        });
    });
});
