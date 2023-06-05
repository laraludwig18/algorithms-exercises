"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import areStringsRotatedVersionsOfEachOther from "../../src/arrays-and-strings/check-strings-are-rotated-version-of-each-other.js";

describe("check-strings-are-rotated-version-of-each-other", () => {
    it("should return true if two strings are rotated versions of each other", () => {
        assert.deepStrictEqual(areStringsRotatedVersionsOfEachOther("waterbottle", "erbottlewat"), true);

    });

    it("should return false if two strings are not rotated versions of each other", () => {
        assert.deepStrictEqual(areStringsRotatedVersionsOfEachOther("waterbottle", "erbottllwat"), false);
    });
});
