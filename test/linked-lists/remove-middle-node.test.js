"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import LinkedList from "../../src/linked-lists/LinkedList.js";

describe("remove-middle-node", () => {
    it("should remove middle node", () => {
        assert.strictEqual(
            new LinkedList()
                .addMany(["a", "b", "c", "d", "e", "f"])
                .removeMiddleNode()
                .getKthToLast(4),
            "b");

        assert.strictEqual(
            new LinkedList()
                .addMany(["a", "b", "c"])
                .removeMiddleNode()
                .getKthToLast(2),
            "a");
    });

    it("should not remove middle node when size is less than three", () => {
        assert.strictEqual(
            new LinkedList()
                .addMany(["a", "b"])
                .removeMiddleNode()
                .size(),
            2);
    });
});
