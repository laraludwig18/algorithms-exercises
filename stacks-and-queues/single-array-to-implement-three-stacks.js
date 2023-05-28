"use strict";

import assert from "node:assert/strict";
import TripleStack from "./TripleStack.js";

const firstStack = 1;
const secondStack = 2;
const thirdStack = 3;

const tripleStack = new TripleStack()
    .push({ stackNumber: firstStack, element: 7 })
    .push({ stackNumber: firstStack, element: 4 })
    .push({ stackNumber: secondStack, element: 3 })
    .push({ stackNumber: thirdStack, element: 1 });

tripleStack.pop(firstStack);

assert.strictEqual(tripleStack.peek(firstStack), 7);
assert.strictEqual(tripleStack.peek(secondStack), 3);
assert.strictEqual(tripleStack.peek(thirdStack), 1);

assert.strictEqual(tripleStack.isEmpty(firstStack), false);
assert.strictEqual(tripleStack.isEmpty(secondStack), false);

tripleStack.pop(thirdStack);

assert.strictEqual(tripleStack.isEmpty(thirdStack), true);
