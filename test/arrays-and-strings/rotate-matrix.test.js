"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import rotateMatrix90Clockwise from "../../src/arrays-and-strings/rotate-matrix.js";

describe("replace-spaces-with-character", () => {
    it("should return rotated matrix 90 clockwise", () => {
        assert.deepStrictEqual(
            rotateMatrix90Clockwise(
                [[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]]),
            [[13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4]]);
    });
});

// 1  2  3  4
// 5  6  7  8
// 9  10 11 12
// 13 14 15 16

// 13 9  5  1
// 14 6  7  2
// 15 10 11 3
// 16 12 8  4

// 13 9  5  1
// 14 10 6  2
// 15 11 7  3
// 16 12 8  4
