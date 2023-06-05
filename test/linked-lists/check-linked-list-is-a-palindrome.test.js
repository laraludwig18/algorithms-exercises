"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import LinkedList from "../../src/linked-lists/LinkedList.js";

describe("check-linked-list-is-a-palindrome", () => {
    it("should return true if linked list is a palindrome", () => {
        const linkedList = new LinkedList()
            .addMany(["a", "t", "c", "o", "c", "t", "a"]);

        assert.strictEqual(linkedList.isAPalindrome(), true);
    });

    it("should return false if linked list is not a palindrome", () => {
        const linkedList = new LinkedList()
            .addMany(["j", "o", "h", "n", "d", "o", "e"]);

        assert.strictEqual(linkedList.isAPalindrome(), false);
    });
});
