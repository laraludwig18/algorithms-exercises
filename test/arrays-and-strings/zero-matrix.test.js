"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import zeroMatrix from "../../src/arrays-and-strings/zero-matrix.js";

describe("zero-matrix", () => {
    it("should return zeroed matrix", () => {
        assert.deepStrictEqual(
            zeroMatrix(
                [[0, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]]),
            [[0, 0, 0, 0],
            [0, 6, 7, 8],
            [0, 10, 11, 12],
            [0, 14, 15, 16]]);

        assert.deepStrictEqual(
            zeroMatrix(
                [[1, 2, 3, 4],
                [5, 0, 7, 8],
                [9, 10, 11, 12]]),
            [[1, 0, 3, 4],
            [0, 0, 0, 0],
            [9, 0, 11, 12]]);
    });
});
