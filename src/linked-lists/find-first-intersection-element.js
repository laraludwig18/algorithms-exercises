"use strict";

import LinkedList from "./LinkedList.js";

/**
* Time complexity: O(N + M)
* Space complexity: O(1)
* 
* @param {LinkedList} firstLinkedList
* @param {LinkedList} secondLinkedList
* @return {any}
*/
export default function findFirstIntersectionElement(firstLinkedList, secondLinkedList) {
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
    shorter = shorter.peek();

    while (shorter.element !== longer.element) {
        shorter = shorter.next;
        longer = longer.next;
    }

    return longer.element;
}
