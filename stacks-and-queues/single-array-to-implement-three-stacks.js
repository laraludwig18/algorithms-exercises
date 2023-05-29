"use strict";

import assert from "node:assert/strict";
import TripleStack from "./TripleStack.js";

const firstStackIndex = 1;
const secondStackIndex = 2;
const thirdStackIndex = 3;

const tripleStack = new TripleStack()
    .push({ stackIndex: firstStackIndex, element: 7 })
    .push({ stackIndex: firstStackIndex, element: 4 })
    .push({ stackIndex: secondStackIndex, element: 3 })
    .push({ stackIndex: thirdStackIndex, element: 1 });

tripleStack.pop(firstStackIndex);

assert.strictEqual(tripleStack.peek(firstStackIndex), 7);
assert.strictEqual(tripleStack.peek(secondStackIndex), 3);
assert.strictEqual(tripleStack.peek(thirdStackIndex), 1);

assert.strictEqual(tripleStack.isEmpty(firstStackIndex), false);
assert.strictEqual(tripleStack.isEmpty(secondStackIndex), false);

tripleStack.pop(thirdStackIndex);

assert.strictEqual(tripleStack.isEmpty(thirdStackIndex), true);
