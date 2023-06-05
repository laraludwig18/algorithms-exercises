"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import LinkedList from "../../src/linked-lists/LinkedList.js";

describe("remove-duplicates-unsorted-linked-list", () => {
    it("should remove duplicates from linked list", () => {
        const linkedList = new LinkedList().addMany([2, 2, 2]);

        assert.strictEqual(linkedList.removeDuplicates().size(), 1);
    });

    it("should remain the same size when duplicates are not found", () => {
        const linkedList = new LinkedList().addMany([2, 3]);

        assert.strictEqual(linkedList.removeDuplicates().size(), 2);
    });
});
