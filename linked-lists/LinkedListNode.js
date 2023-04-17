"use strict";

export default class LinkedListNode {
    /**
    * @param {any} element
    */
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
