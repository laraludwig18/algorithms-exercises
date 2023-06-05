"use strict";

import assert from "node:assert/strict";
import { describe, it, beforeEach } from 'node:test';

import Queue from "../../src/stacks-and-queues/queues/two-stacks/Queue.js";

describe("queue-via-stacks", () => {
    let queue = null;

    beforeEach(() => {
        queue = new Queue()
            .enqueue(7)
            .enqueue(3);
    });

    describe("peek", () => {
        it("should return first element", () => {
            assert.strictEqual(queue.peek(), 7);
        });
    })

    describe("dequeue", () => {
        it("should dequeue first element", () => {
            assert.strictEqual(queue.dequeue(), 7);
        });
    })
});
