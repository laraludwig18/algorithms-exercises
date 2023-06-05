"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import areStringsLessThanTwoEditsAway from "../../src/arrays-and-strings/check-strings-are-less-than-two-edits-away.js";

describe("check-strings-are-less-than-two-edits-away", () => {
    it("should return true if string is less than two edits away", () => {
        assert.strictEqual(areStringsLessThanTwoEditsAway("pale", "ple"), true);
        assert.strictEqual(areStringsLessThanTwoEditsAway("pales", "pale"), true);
        assert.strictEqual(areStringsLessThanTwoEditsAway("pale", "bale"), true);
    });

    it("should return false if string is greater or equal to two edits away", () => {
        assert.strictEqual(areStringsLessThanTwoEditsAway("pale", "bae"), false);
    });
});
