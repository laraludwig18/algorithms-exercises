"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import StackWithMinimumElement from "../../src/stacks-and-queues/stacks/array-with-minimum-element/StackWithMinimumElement.js";

describe("find-minimum-element", () => {
    it("should return minimum element", () => {
        const stackWithMinimumElement = new StackWithMinimumElement()
            .push(7)
            .push(3)
            .push(6)
            .push(5);

        assert.strictEqual(stackWithMinimumElement.getMinimumElement(), 3);
    });

    it("should return minimum element when popped last minimum element", () => {
        const stackWithMinimumElement = new StackWithMinimumElement()
            .push(7)
            .push(5)
            .push(6)
            .push(3);

        stackWithMinimumElement.pop();

        assert.strictEqual(stackWithMinimumElement.getMinimumElement(), 5);
    });
});
