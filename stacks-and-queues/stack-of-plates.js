"use strict";

import assert from "node:assert/strict";
import SetOfStacks from "./SetOfStacks.js";

const capacityPerStack = 2;
const secondStackIndex = 1;

const setOfStacks = new SetOfStacks(capacityPerStack)
    .push(7)
    .push(3)

// assert.strictEqual(setOfStacks.getStackQuantity(), 2);

// setOfStacks.pop();
// setOfStacks.pop();

// assert.strictEqual(setOfStacks.getStackQuantity(), 1);

setOfStacks
    .push(6)
    .push(9)
    .push(4);

assert.strictEqual(setOfStacks.popAt(secondStackIndex), 9);
assert.strictEqual(setOfStacks.getStackQuantity(), 2);
