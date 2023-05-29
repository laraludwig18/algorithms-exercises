"use strict";

export default class LinkedListNode {
    constructor(element) {
        /**
        * @type {any}
        */
        this.element = element;
        /**
        * @type {LinkedListNode}
        * @default null
        */
        this.next = null
    }
}
