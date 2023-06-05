"use strict";

import assert from "node:assert/strict";
import { describe, it, beforeEach } from 'node:test';

import SetOfStacks from "../../src/stacks-and-queues/SetOfStacks.js";

describe("stack-of-plates", () => {
    const capacityPerStack = 2;
    const secondStackIndex = 1;
    let setOfStacks = null;

    beforeEach(() => {
        setOfStacks = new SetOfStacks(capacityPerStack)
            .push(7)
            .push(3)
            .push(5)
            .push(6);
    });

    it("should create two stacks when four elements and capacity is two", () => {
        assert.strictEqual(setOfStacks.getStackQuantity(), 2);
    });

    it("should remove one stack when popped two elements", () => {
        setOfStacks.pop();
        setOfStacks.pop();

        assert.strictEqual(setOfStacks.getStackQuantity(), 1);
    });

    it("should remove one stack when popped two elements, one using popAt", () => {
        setOfStacks.pop();

        assert.strictEqual(setOfStacks.popAt(secondStackIndex), 5);
        assert.strictEqual(setOfStacks.getStackQuantity(), 1);
    });
});
