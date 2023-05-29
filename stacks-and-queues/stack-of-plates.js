"use strict";

import assert from "node:assert/strict";
import SetOfStacks from "./SetOfStacks.js";

const capacityPerStack = 2;

const setOfStacks = new SetOfStacks(capacityPerStack)
    .push(7)
    .push(3)
    .push(6)
    .push(5);

assert.strictEqual(setOfStacks.getStackQuantity(), 2);

setOfStacks.pop();
setOfStacks.pop();

assert.strictEqual(setOfStacks.getStackQuantity(), 1);
