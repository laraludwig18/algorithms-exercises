"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import LinkedList from "../../src/linked-lists/LinkedList.js";
import findFirstIntersectionElement from "../../src/linked-lists/find-first-intersection-element.js";

describe("find-first-intersection-element", () => {
    it("should return intersection element", () => {
        /** 
         * 3 -> 1 -> 5 -> 9
         *                 -> 7 -> 2 -> 1 = intersection
         *          4 -> 6
        */

        const firstLinkedList = new LinkedList().addMany([3, 1, 5, 9, 7, 2, 1]);
        const secondLinkedList = new LinkedList().addMany([4, 6, 7, 2, 1]);

        assert.strictEqual(
            findFirstIntersectionElement(firstLinkedList, secondLinkedList),
            7);
    });

    it("should return null if linked lists are null", () => {
        assert.strictEqual(
            findFirstIntersectionElement(null, null),
            null);
    });

    it("should return null if linked lists are empty", () => {
        assert.strictEqual(
            findFirstIntersectionElement(new LinkedList(), new LinkedList()),
            null);
    });
});
