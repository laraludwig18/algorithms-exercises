import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
    static NotFound = -1;

    constructor() {
        this.head = null;
    }

    add(element) {
        const node = new LinkedListNode(element);

        let current;

        if (this.head === null)
            this.head = node;
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        return this;
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (current.element === element) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                return current.element;
            }
            prev = current;
            current = current.next;
        }

        return NotFound;
    }
}
