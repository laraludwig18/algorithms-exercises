"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import LinkedList from "../../src/linked-lists/LinkedList.js";
import sumLinkedLists from "../../src/linked-lists/sum-linked-lists.js";

describe("sum-linked-lists", () => {
    it("should sum linked list values", () => {
        const firstLinkedList = new LinkedList().addMany([6, 1, 7]);
        const secondLinkedList = new LinkedList().addMany([2, 9, 5]);

        const sumList = sumLinkedLists(firstLinkedList, secondLinkedList);

        assert.strictEqual(sumList.toString(), "912");
    });

    it("should sum linked list values in reverse order", () => {
        const firstLinkedList = new LinkedList().addMany([7, 1, 6]);
        const secondLinkedList = new LinkedList().addMany([6, 9, 2]);

        const reverse = true;
        const sumListReverse = sumLinkedLists(
            firstLinkedList,
            secondLinkedList,
            reverse);

        assert.strictEqual(sumListReverse.toString(), "913");
    });
});
