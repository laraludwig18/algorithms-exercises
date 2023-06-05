"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import LinkedList from "../../src/linked-lists/LinkedList.js";

describe("find-beginning-of-loop", () => {
    it("should return node at beginning of loop", () => {
        /** 
         * 1 -> 2 -> 3 -> 4 -> 5
         *           ^         |
         *           |         v
         *           8 <- 7 <- 6
         * */

        const linkedList = new LinkedList().addMany([1, 2, 3, 4, 5, 6, 7, 8]);

        const lastNode = linkedList.getKthNode(linkedList.size() - 1);
        const thirdNode = linkedList.peek().next.next;
        lastNode.next = thirdNode;
        const beginningOfLoop = lastNode.next;

        assert.strictEqual(linkedList.findBeginningOfLoop(), beginningOfLoop);
    });

    it("should return null when loop does not exists", () => {
        const linkedList = new LinkedList().addMany([1, 2, 3]);

        assert.strictEqual(linkedList.findBeginningOfLoop(), null);
    });

    it("should return null when linked list is empty", () => {
        const linkedList = new LinkedList();

        assert.strictEqual(linkedList.findBeginningOfLoop(), null);
    });
});
