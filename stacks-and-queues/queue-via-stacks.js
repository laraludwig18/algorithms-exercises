"use strict";

import assert from "node:assert/strict";
import Queue from "./queues/implementations/two-stacks/Queue.js";

assert.strictEqual(
    new Queue()
        .enqueue(7)
        .enqueue(3)
        .peek(),
    7);

assert.strictEqual(
    new Queue()
        .enqueue(7)
        .enqueue(3)
        .dequeue(),
    7);
