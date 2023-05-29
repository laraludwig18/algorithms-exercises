"use strict";

export default class StackNode {
    constructor(element = null) {
        /**
        * @type {StackNode}
        * @default null
        */
        this.above = null;
        /**
        * @type {StackNode}
        * @default null
        */
        this.below = null;
        /**
        * @type {any}
        * @default null
        */
        this.element = element
    }
}
