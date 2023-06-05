"use strict";

export default class Node {
    constructor(value = null) {
        /**
        * @type {Node}
        * @default null
        */
        this.above = null;
        /**
        * @type {Node}
        * @default null
        */
        this.below = null;
        /**
        * @type {any}
        * @default null
        */
        this.value = value;
    }
}
