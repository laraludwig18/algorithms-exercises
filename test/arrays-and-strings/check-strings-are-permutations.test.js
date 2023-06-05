"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import areStringsPermutations from "../../src/arrays-and-strings/check-strings-are-permutations.js";

describe("check-strings-are-permutations", () => {
    it("should return true if two strings are permutations", () => {
        assert.deepStrictEqual(areStringsPermutations("john", "nhoj"), true);

    });

    it("should return false if two strings are not permutations", () => {
        assert.deepStrictEqual(areStringsPermutations("john", "john "), false);
        assert.deepStrictEqual(areStringsPermutations("john", "doe"), false);
    });
});
