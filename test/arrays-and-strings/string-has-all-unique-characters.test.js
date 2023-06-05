"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import hasAllUniqueCharacters from "../../src/arrays-and-strings/string-has-all-unique-characters.js";

describe("string-has-all-unique-characters", () => {
    it("should return true if string has all unique characters", () => {
        assert.strictEqual(hasAllUniqueCharacters("john"), true);
        assert.strictEqual(hasAllUniqueCharacters("johnN"), true);
    });

    it("should return false if string has duplicated characters", () => {
        assert.strictEqual(hasAllUniqueCharacters("111111"), false);
    });
});
