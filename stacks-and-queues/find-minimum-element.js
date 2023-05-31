"use strict";

import assert from "node:assert/strict";
import StackWithMinimumElement from "./stacks/implementations/array-with-minimum-element/StackWithMinimumElement.js";

assert.strictEqual(
    new StackWithMinimumElement()
        .push(7)
        .push(3)
        .push(6)
        .push(5)
        .getMinimumElement(),
    3);

const stackToCheck = new StackWithMinimumElement()
    .push(7)
    .push(5)
    .push(6)
    .push(3);

stackToCheck.pop();

assert.strictEqual(stackToCheck.getMinimumElement(), 5);
