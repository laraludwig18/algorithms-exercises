"use strict";

import assert from "node:assert/strict";
import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList().addMany([1, 2, 3, 4, 5, 6, 7, 8]);

const lastNode = linkedList.getKthNode(linkedList.size() - 1);
const thirdNode = linkedList.peek().next.next;
lastNode.next = thirdNode;
const beginningOfLoop = lastNode.next;

/** 
* 1 -> 2 -> 3 -> 4 -> 5
*           ^         |
*           |         v
*           8 <- 7 <- 6
* */

assert.strictEqual(
    linkedList.findBeginningOfLoop(),
    beginningOfLoop);

assert.strictEqual(
    new LinkedList()
        .addMany([1, 2, 3])
        .findBeginningOfLoop(),
    null);

assert.strictEqual(
    new LinkedList()
        .findBeginningOfLoop(),
    null);
