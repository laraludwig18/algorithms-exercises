"use strict";

import assert from "node:assert/strict";
import LinkedList from "./LinkedList.js";

assert.strictEqual(
    new LinkedList()
        .addMany(["a", "t", "c", "o", "c", "t", "a"])
        .isAPalindrome(),
    true);

assert.strictEqual(
    new LinkedList()
        .addMany(["j", "o", "h", "n", "d", "o", "e"])
        .isAPalindrome(),
    false);
