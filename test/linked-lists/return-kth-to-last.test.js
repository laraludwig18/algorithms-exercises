"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import LinkedList from "../../src/linked-lists/LinkedList.js";

describe("return-kth-to-last", () => {
    it("should return element at k index", () => {
        assert.strictEqual(
            new LinkedList()
                .addMany([5, 6, 7, 8, 9])
                .getKthToLast(2),
            8);

        assert.strictEqual(
            new LinkedList()
                .addMany([5, 6, 7, 8, 9])
                .getKthToLast(5),
            5);
    });

    it("should return null if k index was not found", () => {
        assert.strictEqual(
            new LinkedList()
                .addMany([5, 6, 7, 8, 9])
                .getKthToLast(6),
            null);
    });
});

