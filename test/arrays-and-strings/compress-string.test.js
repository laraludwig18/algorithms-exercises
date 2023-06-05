"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import compressString from "../../src/arrays-and-strings/compress-string.js";

describe("compress-string", () => {
    it("should return compressed string", () => {
        assert.deepStrictEqual(compressString("aabcccccaaa"), "a2b1c5a3");
    });

    it("should return original string if compressed is greater or equal to original", () => {
        assert.deepStrictEqual(compressString("aabb"), "aabb");
        assert.deepStrictEqual(compressString("abcd"), "abcd");
    });
});
