"use strict";

export default class LinkedListNode {
    /**
    * @param {string | number} element
    */
    constructor(element) {
        /**
        * @property {string | number}
        */
        this.element = element;
        /**
        * @property {LinkedListNode}
        * @default null
        */
        this.next = null
    }
}
