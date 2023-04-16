import assert from "node:assert/strict";
import LinkedList from "./LinkedList.js";

/**
 * Time complexity: O(N²)
 * Space complexity: O(1)
 *
 * @param {LinkedList} linkedList
 * @return {LinkedList} Modified LinkedList without duplicates
 */
function removeDuplicatesUnsortedLinkedList(linkedList) {
    let current = linkedList.head;

    while (current !== null) {
        let runner = current;

        while (runner.next !== null) {
            if (runner.next.element === current.element) runner.next = runner.next.next;
            else runner = runner.next;
        }

        current = current.next;
    }

    return linkedList;
}

assert.strictEqual(removeDuplicatesUnsortedLinkedList(
    new LinkedList()
        .add(2)
        .add(2)).head?.next, null);

assert.strictEqual(removeDuplicatesUnsortedLinkedList(
    new LinkedList()
        .add(2)
        .add(3)).head?.next?.element, 3);
