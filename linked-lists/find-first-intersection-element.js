"use strict";

import assert from "node:assert/strict";
import LinkedList from "./LinkedList.js";

/**
* Time complexity: O(N + M)
* Space complexity: O(1)
* 
* @property {Function} findFirstIntersectionElement
* @param {LinkedList} firstLinkedList
* @param {LinkedList} secondLinkedList
* @return {string | number}
*/
function findFirstIntersectionElement(firstLinkedList, secondLinkedList) {
    if (!firstLinkedList || !secondLinkedList) return null;

    const firstLinkedListResult = firstLinkedList.getTailAndSize();
    const secondLinkedListResult = secondLinkedList.getTailAndSize();

    const areEmptyLinkedLists = !firstLinkedListResult.size || !secondLinkedListResult.size;
    if (areEmptyLinkedLists) return null;

    const areTailElementsDifferent = firstLinkedListResult.tail.element !== secondLinkedListResult.tail.element;
    if (areTailElementsDifferent) return null;

    let shorter = firstLinkedListResult.size < secondLinkedListResult.size
        ? firstLinkedList
        : secondLinkedList

    let longer = firstLinkedListResult.size < secondLinkedListResult.size
        ? secondLinkedList
        : firstLinkedList

    longer = longer.getKthNode(Math.abs(firstLinkedListResult.size - secondLinkedListResult.size));
    shorter = shorter.head;

    while (shorter.element !== longer.element) {
        shorter = shorter.next;
        longer = longer.next;
    }

    return longer.element;
}

const firstLinkedList = new LinkedList().addMany([3, 1, 5, 9, 7, 2, 1]);
const secondLinkedList = new LinkedList().addMany([4, 6, 7, 2, 1]);

/** 
 * 3 -> 1 -> 5 -> 9
 *                 -> 7 -> 2 -> 1 = intersection
 *          4 -> 6
*/

assert.strictEqual(
    findFirstIntersectionElement(firstLinkedList, secondLinkedList),
    7);

assert.strictEqual(
    findFirstIntersectionElement(null, null),
    null);

assert.strictEqual(
    findFirstIntersectionElement(new LinkedList(), new LinkedList()),
    null);
