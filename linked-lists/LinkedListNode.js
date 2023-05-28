"use strict";

export default class LinkedListNode {
    constructor(element) {
        /**
        * @property {any}
        */
        this.element = element;
        /**
        * @property {LinkedListNode}
        * @default null
        */
        this.next = null
    }
}
